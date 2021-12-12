import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import IndexPage from './components/IndexPage';
import Navigation from './components/Navigation';

const Routes: React.FC = () => (
    <>
        <Navigation />
        <Switch>
            <Route path="/" component={IndexPage} />
        </Switch>
    </>
);

export default withRouter(Routes);
