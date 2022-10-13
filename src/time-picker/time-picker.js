import React from 'react';
import { useFieldApi } from '@data-driven-forms/react-form-renderer';
import { TimeInput } from '@signavio/ui/future';

import getProps from '../get-props';

const TimePicker = (props) => {
  const { input, meta, ...rest } = useFieldApi(props);

  return <TimeInput {...input} {...rest} {...getProps({meta})} />;
};

export default TimePicker;
