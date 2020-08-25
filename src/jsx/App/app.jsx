import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './style.css';
import Header from '../Header';
import ItemList from '../ItemList';
import Footer from '../Footer';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={withRouter(ItemList)} />
    </Switch>
    <Footer />
  </BrowserRouter>,
  document.getElementById('content')
);
