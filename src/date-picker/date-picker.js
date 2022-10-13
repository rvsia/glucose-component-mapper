import React from 'react';
import { useFieldApi } from '@data-driven-forms/react-form-renderer';
import { DateInput } from '@signavio/ui/future';

import getProps from '../get-props';

const DatePicker = (props) => {
  const { input, meta, ...rest } = useFieldApi(props);

  return <DateInput {...input} {...rest} {...getProps({meta})} />;
};

export default DatePicker;
