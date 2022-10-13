import React from 'react';
import { useFieldApi } from '@data-driven-forms/react-form-renderer';

import { TextInput } from '@signavio/ui/future';

import getProps from '../get-props';

const TextField = (props) => {
  const { input, meta, ...rest } = useFieldApi(props);

  return <TextInput {...input} {...rest} {...getProps({meta})} />;
};

export default TextField;
