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
  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  async componentDidUpdate(_, prevState) {
    if (
      this.state.page === prevState.page ||
      this.state.query === prevState.page
    )
      return;
    console.log('aidshajnfioajfolaj');
    this.getPictures();
  }

  async getPictures() {
    const { page, query } = this.state;
    this.setState({ isLoading: true });
    try {
      const resp = await getPictures(query, page);
      this.setState(prevState => {
        console.log(prevState);
        return {
          pics:
            this.state.page === 1
              ? [...resp.hits]
              : [...prevState.pics, ...resp.hits],
        };
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async componentDidMount() {
    this.getPictures();
  }

  render() {
    return (
      <>
        {this.state.error && <span>{this.state.error}</span>}

        <ul className="gallery">
          {this.state.pics
            .slice(0, this.state.visible)
            .map(({ webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={webformatURL}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
              />
            ))}
        </ul>
        {this.state.isLoading && <Loader />}
        <Button func={this.loadMore}></Button>
      </>
    );
  }
}
