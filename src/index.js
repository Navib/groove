import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import promise from 'redux-promise';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/scss/bootstrap.scss';

import reducers from './reducers';
import './../scss/main.scss';
import Home from './components/home';
import Movie from './components/movie';
import Search from './components/search';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <nav>
          <Link className="btn btn-danger" to="/">Home</Link>
          <Link className="btn btn-danger" to="/movie/:id">Movie</Link>
          <Link className="btn btn-danger" to="/search">Contact</Link>
        </nav>
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/" component={Home} />
        </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.app'));
