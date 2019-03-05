import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'formik';

const TextField = props => {
  const { formik, block, symbol, ...attributes } = props;
  let styles = {};
  if (block) {
    styles = {
      ...styles,
      width: '100%',
    };
  }
  return <Ons.Input {...attributes} />;
};

TextField.propTypes = {
  block: PropTypes.bool,
  float: PropTypes.bool,
  modifier: PropTypes.string,
};

TextField.defaultProps = {
  block: false,
  float: false,
  modifier: 'underbar',
};

export default connect(TextField);
