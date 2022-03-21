import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import GreetingContainer from "./Greeting/greeting_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HouseFormContainer from '../components/Houses/house_form/house_form_container';
import SearchContainer from '../components/Search/search_container';
import HouseShowContainer from './Houses/house_show_container';
const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <h1>Добро пожаловать</h1>
            </Link>
        <GreetingContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/" component={SearchContainer} />
            <ProtectedRoute exact path="/houses/new" component={HouseFormContainer} />
            <ProtectedRoute exact path="/houses/:id" component={HouseShowContainer} />
        </Switch>
    </div>
);

export default App;
