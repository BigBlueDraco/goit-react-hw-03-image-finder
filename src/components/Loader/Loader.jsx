import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Puff } from 'react-loader-spinner';
export default class Loader extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  render() {
    return (
      <Puff
        height="80"
        width="80"
        radisu={1}
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }
}
