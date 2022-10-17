import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Button extends Component {
  //   static propTypes = {second: third}

  render() {
    return (
      <button className="Button" onClick={e => this.props.func(e)}>
        Load more
      </button>
    );
  }
}
Button.propTypes = {
  func: PropTypes.func,
};
