import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export default class Search extends Component {
  static propTypes = {
    loadWeather: PropTypes.func.isRequired,
  }

  state = {
    searchVal: ''
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.search();
    }
  }

  handleChange = (e) => {
    this.setState({ searchVal: e.target.value })
  }

  search = () => {
    this.props.loadWeather(this.state.searchVal);
  }

  render() {
    return (
      <div>
        <Input
          value={this.state.searchVal}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Search"
                onClick={this.search}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
    )
  }
}
