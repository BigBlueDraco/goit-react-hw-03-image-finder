import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  tags,
  openLargeImage,
}) {
  return (
    <li
      className="ImageGalleryItem"
      onClick={e => {
        openLargeImage(largeImageURL);
        console.log(largeImageURL);
      }}
    >
      <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
    </li>
  );
}
