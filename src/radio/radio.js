import React from 'react';
import PropTypes from 'prop-types';
import { useFieldApi } from '@data-driven-forms/react-form-renderer';

import { RadioGroup, RadioButton } from '@signavio/ui';

import getProps from '../get-props';

const Radio = (props) => {
  const { input, meta, options, ...rest } = useFieldApi({ ...props, component: ''});

  return (
    <RadioGroup {...input} {...rest} {...getProps({meta})}>
      {options.map(({label, ...option}) => (
        <RadioButton key={option.value} {...option}>
          {label}
        </RadioButton>
      ))}
    </RadioGroup>
  )
};

Radio.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  )
};

export default Radio;
