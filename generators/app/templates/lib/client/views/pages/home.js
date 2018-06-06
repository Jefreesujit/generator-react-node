'use strict';

import React from 'react';
import Page from './index';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor () {
    super();
  }

  componentWillMount () {
    this.props.dispatch(actions.fetchPageData());
  }

  render () {
    return (
      <Page className="home-page" header="Home">
        <h2>{this.props.message}</h2>
      </Page>
    );
  }
}

Home.displayName = 'Home';

function select (state) {
  return {
    message: state.homePage.message
  };
}

export default connect(select)(Home);
