import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import { authSelectors } from '../../redux/auth';

export default function PublicRoute({ children, redirectTo, ...routeProps }) {
  //  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const isAuthenticated = false;

  return (
    <Route {...routeProps}>
      {isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}

PublicRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  redirectTo: PropTypes.string,
};
