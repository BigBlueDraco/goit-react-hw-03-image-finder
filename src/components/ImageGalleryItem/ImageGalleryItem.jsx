import PropTypes from 'prop-types';

export default function ImageGalleryItem({ webformatURL, largeImageURL, tags, openLargeImage }) {
  return (
    <li
      className="ImageGalleryItem"
      onClick={e => {
        openLargeImage(largeImageURL);
      }}
    >
      <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  openLargeImage: PropTypes.func,
};
