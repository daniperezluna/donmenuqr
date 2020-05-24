const functions = require('firebase-functions');
const auth = require('./util/auth');
const express = require('express');
const path = require('path');
const app = express();

const cors = require('cors');
app.use(cors({origin: true}));

const {
    getAllMenus,
    getMenu,
    postMenu,
    deleteMenu,
    editMenu,
    uploadMenuPhoto
} = require('./APIs/menus')

const {
    loginUser,
    signUpUser,
    uploadProfilePhoto,
    getUserDetail,
    updateUserDetails
} = require('./APIs/users')

// Users
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.post('/user/image', auth, uploadProfilePhoto);
app.get('/user', auth, getUserDetail);
app.post('/user', auth, updateUserDetails);


// Menus
app.get('/menus', getAllMenus);
app.get('/menus/:menuId', getMenu);
app.post('/menus', auth, postMenu);
app.put('/menus/:menuId', auth, editMenu);
app.post('/menus/image/:menuId', auth, uploadMenuPhoto);
app.delete('/menus/:menuId', auth, deleteMenu);
exports.api = functions.https.onRequest(app);