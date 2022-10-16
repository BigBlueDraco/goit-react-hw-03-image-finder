import { Button } from 'components/Button/Button';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getPictures } from 'services/pixabayAPI';

export default class ImageGallery extends Component {
  //   static propTypes = { second: third };
  state = {
    pics: [],
    isLoading: false,
    error: null,
    query: '',
    page: 1,
  };

  async componentDidMount() {
    const { page, query } = this.props;
    this.setState({ isLoading: true });
    try {
      const resp = await getPictures();
      this.setState(prevState => {
        console.log(prevState);
        return {
          pics: [...resp.hits],
        };
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <>
        {this.state.error && <span>{this.state.error}</span>}

        <ul className="gallery">
          {this.state.pics.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
            />
          ))}
        </ul>
        {this.state.isLoading && <Loader />}
        <Button func={this.loadNextPage}></Button>
      </>
    );
  }
}
