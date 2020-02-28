import React, { Suspense, lazy, Fragment } from 'react';
import './App.scss';
// import './assets/css/style.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PreLoader from './components/Preloader/preloader';
import ErrorBoundary from './components/ErrorBoundary/errorBoundary';

const Login = lazy (() => import('./pages/Login/login'));
const Dashboard = lazy(() => import('./pages/Dashboard/dashboard'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/profile-page'));

function App() {
  return (
    <Fragment>
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<PreLoader />}>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/profile" component={ProfilePage} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </Fragment>
  );
}

export default App;
