import React from 'react';
import PropTypes from 'prop-types';
import { useFieldApi } from '@data-driven-forms/react-form-renderer';

import { Input } from '@signavio/ui';

const TextField = (props) => {
  const { input, meta, ...rest } = useFieldApi(props);

  const error = meta.error;

  return <Input {...input} {...rest} error={error} />;
};

TextField.propTypes = {
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool
};

export default TextField;
