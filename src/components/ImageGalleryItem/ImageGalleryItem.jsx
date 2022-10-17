import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  tags,
}) {
  return (
    <li className="ImageGalleryItem" onClick={() => {}}>
      <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
    </li>
  );
}
