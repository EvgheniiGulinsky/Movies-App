/* eslint-disable react/prop-types */
import React from 'react';
import { Alert } from 'antd';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

const ErrorMessage = ({ onCloseHandle, message }) => (
  <Alert message={message} description={message} type="error" closable onClose={onCloseHandle} />
);

ErrorMessage.propTypes = {
  message: PropTypes.string,
  onCloseHandle: PropTypes.func,
};

ErrorMessage.defaultProps = {
  message: '',
  onCloseHandle: () => {},
};

export default ErrorMessage;
