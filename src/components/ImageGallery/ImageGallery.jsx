import PropTypes from 'prop-types';
import React, { Children, Component } from 'react';

export default class ImageGallery extends Component {
  //   static propTypes = { second: third };

  render() {
    return <ul class="gallery">{Children}</ul>;
  }
}
