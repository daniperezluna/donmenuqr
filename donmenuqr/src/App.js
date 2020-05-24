import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import home from './pages/home';
import login from './pages/login';
import dashboard from './pages/dashboard';
import publicMenu from './pages/publicMenu';
import carta from './pages/carta'
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
                <Route exact path="/" component={home}/>
                <Route exact path="/login" component={login}/>
                <Route exact path="/dashboard" component={dashboard}/>
                <Route exact path="/cartas/:menuId" component={publicMenu}/>
                <Route exact path="/cartas/:menuId/static" component={carta}/>
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
