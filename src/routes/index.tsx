import React,{/* { lazy } */} from "react";
import { Route, Switch } from "react-router-dom";
import EventBookingPage from "../pages/event-booking-page";
import ListingPage from "../pages/listing-page";

import LoginPage from "../pages/login-page";


const AppRoutes:React.FC=()=>{
    return(
        <Switch>
            <Route path="/login" exact={true} component={LoginPage}/>
            <Route path="/listings" exact={true} component={ListingPage}/>
            <Route path="/event-booking" exact={true} component={EventBookingPage}/>
        </Switch>
    )
}

export default AppRoutes;