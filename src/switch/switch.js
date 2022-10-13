import React from 'react';
import { useFieldApi } from '@data-driven-forms/react-form-renderer';

import { BooleanInput } from '@signavio/ui/future';

import getProps from '../get-props';

const Switch = (props) => {
  const { input, meta, ...rest } = useFieldApi(props);

  return <BooleanInput {...input} {...rest} yesLabel="Yes" noLabel="No" {...getProps({meta})} />;
};

export default Switch;
