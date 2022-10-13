import React from 'react';
import PropTypes from 'prop-types';
import { useFieldApi } from '@data-driven-forms/react-form-renderer';
import MultipleChoiceListCommon from '@data-driven-forms/common/multiple-choice-list';

import { CheckboxGroup, Checkbox as SignavioCheckbox } from '@signavio/ui';

import getProps from '../get-props';

const Wrapper = ({ label, children }) => (
  <CheckboxGroup label={label}>
    {children}
  </CheckboxGroup>
);

Wrapper.propTypes = {
  label: PropTypes.node,
  children: PropTypes.node
};

const SingleCheckbox = (props) => {
  const { input, label, meta, ...rest } = useFieldApi({ ...props, type: 'checkbox' });

  return (
    <SignavioCheckbox {...input} {...rest} {...getProps({meta})}>
      {label}
    </SignavioCheckbox>
  );
};

const MultipleCheckbox = (props) => {
  const { input, meta, options, ...rest } = useFieldApi({ ...props, component: '' });

  return (
    <CheckboxGroup {...input} {...rest} {...getProps({meta})}>
      {options.map(({label, ...option}) => (
        <SignavioCheckbox key={option.value} {...option}>
          {label}
        </SignavioCheckbox>
      ))}
    </CheckboxGroup>
  )
};

const Checkbox = ({ options, ...props }) =>
  options ? (
    <MultipleCheckbox options={options} {...props} />
  ) : (
    <SingleCheckbox {...props} />
  );

Checkbox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.node, value: PropTypes.any }))
};

export default Checkbox;
