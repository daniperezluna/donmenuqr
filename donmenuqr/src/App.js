import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
// import home from './pages/home';
import LandingPage from './pages/home'
import login from './pages/login';
import dashboard from './pages/dashboard';
import publicMenu from './pages/publicMenu';
import carta from './pages/carta';
import cartaBasica from './pages/cartaBasica';
import cartaMeson from './pages/cartaMeson';
import axios from 'axios';

axios.defaults.baseURL = "https://us-central1-donmenuqr.cloudfunctions.net/api";

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#33c9dc',
			main: '#88b710',
			dark: '#d50000',
			contrastText: '#fff'
		}
	}
});

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/login" component={login}/>
                <Route exact path="/dashboard" component={dashboard}/>
                <Route exact path="/cartas/:menuId/publicMenu" component={publicMenu}/>
                <Route exact path="/cartas/yerbaguena" component={carta}/>
                <Route exact path="/cartas/mesonDiego" component={cartaMeson}/>
                <Route exact path="/cartas/:menuId/basic" component={cartaBasica}/>
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
