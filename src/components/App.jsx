import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    query: 'cat',
  };
  search = query => {
    this.setState({ query });
  };
  render() {
    return (
      <>
        <Searchbar submit={this.search} />
        <ImageGallery page={this.state.page} query={this.state.query} />
      </>
    );
  }
}
