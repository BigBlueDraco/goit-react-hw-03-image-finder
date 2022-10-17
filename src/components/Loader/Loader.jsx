import React, { Component } from 'react';
import { Puff } from 'react-loader-spinner';
export default class Loader extends Component {
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
