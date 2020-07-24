import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import UsersPage from './components/users/UsersPage';
import AlbumsPage from './components/album/AlbumsPage';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <Router>
      <Container maxWidth='lg'>
      <Navigation />
        <Grid container>
          <Grid item xs={12}>
            <Switch>
              <Route path='/users'>
                <UsersPage />
              </Route>
              <Route path='/album'>
                <AlbumsPage />
              </Route>
              <Route path='*'>
                <Redirect to='/' exact/>
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
