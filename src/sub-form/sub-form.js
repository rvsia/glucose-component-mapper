import React from 'react';
import PropTypes from 'prop-types';

import { useFormApi } from '@data-driven-forms/react-form-renderer';

import { Group } from '@signavio/ui';


const SubForm = ({ fields, name, ...rest }) => {
  const formOptions = useFormApi();

  return <Group {...rest}>{formOptions.renderForm(fields, formOptions)}</Group>;
};

SubForm.propTypes = {
  fields: PropTypes.array
};

export default SubForm;
