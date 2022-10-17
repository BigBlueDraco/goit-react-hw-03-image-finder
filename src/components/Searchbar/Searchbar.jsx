import PropTypes from 'prop-types';
import React, { Component } from 'react';

const INITIAL_STATE = {
  query: '',
};

export default class Searchbar extends Component {
  state = {
    query: '',
  };
  handlerChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handlerSubmit = e => {
    e.preventDefault();
    this.props.submit(this.state.query);
    this.setState({ ...INITIAL_STATE });
  };
  reset = () => {};
  render() {
    return (
      <header className="Searchbar" onSubmit={e => this.handlerSubmit(e)}>
        <form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            value={this.state.query}
            onInput={e => this.handlerChange(e)}
            name="query"
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  submit: PropTypes.func.isRequired,
};
