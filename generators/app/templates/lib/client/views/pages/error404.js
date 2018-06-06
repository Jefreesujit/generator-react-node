'use strict';

/* eslint-disable no-unused-vars */
import React from 'react';

class Error404 extends React.Component {

  render () {
    return (
      <div className="page-container">
        <h2 className="error-heading">404 - Missing Resource </h2>
        <p>Please try again, but if the problem persist, contact an administrator.</p>
      </div>
    );
  }
}

Error404.displayName = 'Error404';

export default Error404;
