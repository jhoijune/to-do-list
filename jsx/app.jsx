import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import { Router ,Route,Link, browserHistory} from 'react-router';



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Header}>
      <Route path="/all" component={}/>
      <Route path="/active" component={}/>
      <Route path="/completed" component={}/>
    </Route>
  </Router>,
  document.getElementById('content'),
);
