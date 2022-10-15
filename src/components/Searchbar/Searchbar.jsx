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
    console.log(this.state);
  };
  handlerSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ ...INITIAL_STATE });
  };
  reset = () => {};
  render() {
    return (
      <header className="searchbar" onSubmit={e => this.props.handlerSubmit(e)}>
        <form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onInput={e => this.handlerChange(e)}
            name="query"
            className="input"
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

Searchbar.propTypes = {};
