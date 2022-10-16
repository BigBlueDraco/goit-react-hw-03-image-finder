import { Component } from 'react';
import { Button } from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    query: '',
  };
  // search = query => {
  //   console.log('APP query' + query);
  //   this.setState({ query });
  // };
  render() {
    console.log(this.state.query);
    return (
      <>
        <Searchbar />
        <ImageGallery page={this.state.page} query={this.state.query} />
      </>
    );
  }
}
