import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { Home } from '../components/inicio/Home';
import { Login } from '../components/auth/Login';
import { Registrarse } from '../components/auth/Registrarse';
import { RegistrarRestaurant } from '../components/auth/RegistrarRestaurant';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        exact
                        path="/"
                        component={ Home }
                    />
                    <Route 
                        exact
                        path="/login"
                        component={ Login }
                    />
                    <Route 
                        exact
                        path="/registrarse"
                        component={ Registrarse }
                    />
                    <Route 
                        exact
                        path="/registrar-restaurant"
                        component={ RegistrarRestaurant }
                    />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
};
