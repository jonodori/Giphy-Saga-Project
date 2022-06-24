import React from 'react';
import HomePage from './HomePage/HomePage';
import FavoritesList from '../Favorites/Favorites';
import { HashRouter as Router, Route} from 'react-router-dom';

function App(props) {

  return (
    <>
    <Router>
      <Route path='/' exact>
        <HomePage />
      </Route>
      <Route path='/favorites' exact >
        <FavoritesList />
      </Route>
    </Router>
    </>
  );
}

export default App;
