import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import ProductPage from './pages/Home';

function Router(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ProductPage} />
        {/*<Route path="/favorites" exact />*/}
      </Switch>
    </BrowserRouter>
  )
}

function App() {
  return Router()
};

export default App;
