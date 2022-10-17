import { Button } from 'components/Button/Button';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getPictures } from 'services/pixabayAPI';

export default class ImageGallery extends Component {
  //   static propTypes = { second: third };
  constructor(props) {
    super(props);
    this.state = {
      query: props.query || '',
      pics: [],
      isLoading: false,
      error: null,
      page: 1,
      per_page: props.per_page || 12,
    };
  }
  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  async componentDidUpdate(_, prevState) {
    if (this.state.query !== this.props.query) {
      this.setState({ query: this.props.query, page: 1 });
    }
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.getPictures();
    }
  }

  async getPictures() {
    const { page, query } = this.state;
    this.setState({ isLoading: true });
    try {
      const resp = await getPictures(query, page);
      this.setState(prevState => {
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

        <ul className="ImageGallery">
          {this.state.pics.map(({ webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={webformatURL}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
            />
          ))}
        </ul>
        {this.state.isLoading && <Loader />}
        {this.state.page * this.state.per_page < 500 && (
          <Button func={this.loadMore}></Button>
        )}
      </>
    );
  }
}
