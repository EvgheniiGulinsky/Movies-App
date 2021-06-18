/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

export default class InputField extends Component {
  render() {
    const { onInputChange, searchInput, tab } = this.props;
    const { Search } = Input;
    return tab === '1' ? (
      <Search
        value={searchInput}
        size="large"
        onChange={(event) => {
          onInputChange(event.target.value);
        }}
      />
    ) : null;
  }
}

InputField.propTypes = {
  onInputChange: PropTypes.func,
  searchInput: PropTypes.string,
  tab: PropTypes.string,
};

InputField.defaultProps = {
  onInputChange: () => {},
  searchInput: '',
  tab: '1',
};
