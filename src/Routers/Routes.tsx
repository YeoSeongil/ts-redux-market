import React from "react";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom"
import Nav from '../components/Nav'
import ProductList from "../components/ProductList";
import CartList from "../components/CartList";
import PageNotFount from "../components/PageNotFount";

export default function Routes () {
    return (
        <Router>
            <Nav></Nav>
            <Switch>
                <Route path="/" exact={true} component={ProductList}></Route>
                <Route path="/cart" component={CartList}></Route>
                <Route component={PageNotFount}></Route>
            </Switch>
        </Router>
    );
}