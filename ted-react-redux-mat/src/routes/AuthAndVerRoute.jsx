import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function AuthAndVerRoute({ component: Component, ...rest }) {
    
    
    return (
        <Route {...rest} render={props => (
            localStorage.getItem('user')
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )} />
    );

}