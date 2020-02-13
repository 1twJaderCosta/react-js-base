import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

const PublicRoute = ({
  component: Component,
  ...rest
}) => {
    return (
      <>
        <Route
          {...rest}
          component={props => (
            <Component {...props} />
          )}
        />
      </>
    );
};

const mapStateToProps = state => ({
  isAuthenticated: state && state.auth && state.auth.authenticated,
});

export default connect(mapStateToProps)(PublicRoute);