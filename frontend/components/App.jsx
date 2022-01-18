import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import GreetingContainer from "./Greeting/greeting_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';
import HouseIndexContainer from '../components/Houses/house_index_container';
import SearchContainer from '../components/Search/search_container';
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
        </Switch>
    </div>
);

export default App;
