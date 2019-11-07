import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createStore, StoreProvider } from 'easy-peasy';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import ListArticles from './containers/ListArticles';
import Cake from './containers/Cake';
import model from './model';

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <img src='images/liliCakeLogo.png' alt="patisserie maison à Lyon" className='logo' />
        <Router>
          <Switch>
            <Route path="/cake">
              <Cake />
            </Route>
            <Route path="/">
              <ListArticles />
            </Route>
          </Switch>
        </Router>
      </Container>
    </React.Fragment>
    </StoreProvider>
  );
}

export default App;
