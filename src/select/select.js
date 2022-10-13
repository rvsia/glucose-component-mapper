import React from 'react';
import PropTypes from 'prop-types';
import { useFieldApi } from '@data-driven-forms/react-form-renderer';

import { Select as SignavioSelect } from '@signavio/ui/future';

import getProps from '../get-props';

const Select = (props) => {
  const { input, meta, options, ...rest } = useFieldApi(props);

  return (
    <SignavioSelect {...input} {...rest} {...getProps({meta})}>
      {options &&
        options.map((option) => (
          <SignavioSelect.Option key={option.value} value={option.value}>
            {option.label}
          </SignavioSelect.Option>
        ))}
    </SignavioSelect>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.node
    })
  )
};

export default Select;
