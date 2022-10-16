import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  tags,
}) {
  return (
    <li className="gallery-item" onClick={() => {}}>
      <img src={webformatURL} alt={tags} />
    </li>
  );
}
