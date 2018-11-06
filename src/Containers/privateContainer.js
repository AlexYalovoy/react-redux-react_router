import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route 
      {...rest}
      render = { props =>
        rest.isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect 
            to={{
              pathname: '/login',
              state: {from: props.location}
            }} />
        )
      }
  />
  )
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.user
  }
}

PrivateRoute.propTypes = {
  isAuth: PropTypes.object
}


export default connect(mapStateToProps)(PrivateRoute);