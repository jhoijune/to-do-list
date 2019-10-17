import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, withRouter } from 'react-router';
import { createBrowserHistory } from 'history';

import ItemList from './item-list';

const browserHistory = createBrowserHistory();

ReactDOM.render(
  <Router history={browserHistory}>
    <Route exact path="/" component={withRouter(ItemList)} />
    <Route exact path="/all" component={withRouter(ItemList)} />
    <Route exact path="/active" component={withRouter(ItemList)} />
    <Route exact path="/completed" component={withRouter(ItemList)} />
  </Router>,
  document.getElementById('content'),
);
