import React, { Component } from 'react';
import PropTypes from 'prop-types';
// { largeImageURL, closeModal }
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlerKey);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlerKey);
  }
  handlerKey = e => {
    console.log(e.key);
    if (e.key !== 'Escape') return;
    this.props.closeModal(e);
  };
  render() {
    return (
      <div
        className="Overlay"
        onClick={e => this.props.closeModal(e)}
        // onKeyDown={e => console.log(e)}
      >
        <div class="Modal">
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
