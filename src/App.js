import { Button } from '@material-ui/core';
import ProductFeature from './features/Products';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import productApi from './api/productApi';
import './App.css';
import Header from './components/Header';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';

function App() {


  return (
    <div className="App">

      <Header></Header>


      <Switch>

        <Route path='/' component={CounterFeature} exact />
        <Route path='/todos' component={TodoFeature} />
        <Route path='/albums' component={AlbumFeature} />
        <Route path='/products' component={ProductFeature} />
        {/*<Route component={NotFound} />*/}
      </Switch>

    </div>
  );
}

export default App;
