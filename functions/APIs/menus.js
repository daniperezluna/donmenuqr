const { admin, db } = require('../util/admin');
const config = require('../util/config');

exports.getAllMenus = (request, response) => {
	db
        .collection('menus')
		.orderBy('createdAt', 'desc')
		.get()
		.then((data) => {
			let menus = [];
			data.forEach((doc) => {
				menus.push({
                    menuId: doc.id,
                    name: doc.data().name,
					active: doc.data().active,
                    createdAt: doc.data().createdAt,
                    images: doc.data().imageUrls
				});
            });
			return response.json(menus);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};

exports.getMenu = (request, response) => {
	db
        .doc(`/menus/${request.params.menuId}`)
		.get()
		.then((doc) => {
            console.log(doc);
			if (!doc.exists) {
				return response.status(404).json(
                    { 
                        error: 'Menu not found' 
                    });
            }
			MenuData = doc.data();
			MenuData.menuId = doc.id;
			return response.json(MenuData);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: error.code });
		});
};

exports.postMenu = (request, response) => {
    const newMenuItem = {
        name: request.body.name,
        active: request.body.active,
        createdAt: new Date().toISOString()
    }
    db
        .collection('menus')
        .add(newMenuItem)
        .then((doc)=>{
            const responseMenuItem = newMenuItem;
            responseMenuItem.id = doc.id;
            return response.json(responseMenuItem);
        })
        .catch((err) => {
			response.status(500).json({ error: 'Something went wrong' });
			console.error(err);
		});
};

exports.deleteMenu = (request, response) => {
    const document = db.doc(`/menus/${request.params.menuId}`);
    document
        .get()
        .then((doc) => {
            if (!doc.exists) {
                return response.status(404).json({ error: 'Menu not found' })
            }
            return document.delete();
        })
        .then(() => {
            response.json({ message: 'Delete successfull' });
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};

exports.editMenu = ( request, response ) => { 
    if(request.body.menuId || request.body.createdAt){
        response.status(403).json({message: 'Not allowed to edit'});
    }
    let document = db.collection('menus').doc(`${request.params.menuId}`);
    document.update(request.body)
    .then(()=> {
        response.json({message: 'Updated successfully'});
    })
    .catch((err) => {
        console.error(err);
        return response.status(500).json({ 
                error: err.code 
        });
    });
};

exports.uploadMenuPhoto = async (request, response) => {
    const BusBoy = require('busboy');
	const path = require('path');
	const os = require('os');
    const fs = require('fs');
    const uuidv4 = require('uuid/v4');

	const busboy = new BusBoy({ headers: request.headers });

	let imageFileName = {};
    let imagesToUpload = [];
    let imageToAdd = {}

	busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
		if (mimetype !== 'image/png' && mimetype !== 'image/jpeg') {
			return response.status(400).json({ error: 'Wrong file type submited' });
		}
        imageFileName = filename.toString();
        const filePath = path.join(os.tmpdir(), imageFileName);
		imageToAdd = { filePath, mimetype };
        file.pipe(fs.createWriteStream(filePath));
        imageToAdd.uuid = uuidv4();
        imageToAdd.name = imageFileName;
        imagesToUpload.push(imageToAdd);
    });

    busboy.on("finish", () => {
        let promises = []
        let imageUrls = []
        imagesToUpload.forEach(imageToBeUploaded => {
            console.log("Imagen", imageToBeUploaded);
            imageUrls.push(`https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageToBeUploaded.name}?alt=media&token=${imageToBeUploaded.uuid}`)
            console.log("URL", imageUrls);
            promises.push(admin
                .storage()
                .bucket()
                .upload(imageToBeUploaded.filePath, {
                        resumable: false,
                        metadata: {
                            metadata: {
                                contentType: imageToBeUploaded.mimetype,
                                firebaseStorageDownloadTokens: imageToBeUploaded.uuid
                            }
                        }
                    }
                )
            )
        })     
        Promise.all(promises)
        .then(() => {
            return db.doc(`/menus/${request.params.menuId}`).update({
                imageUrls
            });
        })
        .then(() => {
            response.set('Access-Control-Allow-Origin', '*');
            response.status(200).json({msg: 'Successfully uploaded all images amd menu updated'})
        })
        .catch(err => { 
            response.status(500).json(err) 
        })
    });

	busboy.end(request.rawBody);
};
