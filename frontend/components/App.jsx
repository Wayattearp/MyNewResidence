import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HouseFormContainer from '../components/Houses/house_form/house_form_container';
import SearchContainer from '../components/Search/search_container';
// import HouseSell from './Houses/house_sell';
import HouseShowContainer from './Houses/house_show_container';
import Splash from "./Splash/splash";
import HeaderNav from "./Navs/header_nav";
import HouseSellForm from './Houses/house_sell_form';

const App = () => (
    <div>
        <HeaderNav />
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <ProtectedRoute exact path="/search" component={SearchContainer} />
            <ProtectedRoute exact path="/buy" component={SearchContainer} />
            <ProtectedRoute exact path="/rent" component={SearchContainer} />
            {/* <ProtectedRoute exact path="/sell" component={HouseSell} /> */}
            <ProtectedRoute exact path="/sell" component={HouseSellForm} />
            <ProtectedRoute exact path="/houses/new" component={HouseFormContainer} />
            <ProtectedRoute exact path="/houses/:id" component={HouseShowContainer} />
            <Route exact path="/" component={Splash} />
        </Switch>
    </div>
);

export default App;
