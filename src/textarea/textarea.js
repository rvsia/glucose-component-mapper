import React from 'react';
import { useFieldApi } from '@data-driven-forms/react-form-renderer';

import { Textarea as SignavioTextArea } from '@signavio/ui/future';

import getProps from '../get-props';

const Textarea = (props) => {
  const { input, meta, ...rest } = useFieldApi(props);

  return <SignavioTextArea {...input} {...rest} {...getProps({meta})}/>;
};

export default Textarea;
