import React from 'react';
import PropTypes from 'prop-types';

import { Button as SignavioButton, PrimaryButton } from '@signavio/ui';
import { Stack } from '@signavio/ui/core';

import FormTemplate from '@data-driven-forms/common/form-template';

export const Button = ({ label, buttonType, ...props }) => buttonType === 'submit' ?
<PrimaryButton {...props}>{label}</PrimaryButton>
: <SignavioButton {...props}>{label}</SignavioButton>;

Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  buttonType: PropTypes.string
};

export const ButtonGroup = ({ children, ...props }) => <Stack spacing="small" direction="horizontal" {...props}>{children}</Stack>;

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export const Title = ({ children, ...props }) => <h1 {...props}>{children}</h1>;

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export const Description = ({ children, ...props }) => <div {...props}>{children}</div>;

Description.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export const Form = ({ children, ...props }) => (
  <form noValidate {...props}>
    <Stack spacing="small" direction="vertical">
      {children}
    </Stack>
  </form>
);

Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

const WrappedFormTemplate = (props) => (
  <FormTemplate FormWrapper={Form} Button={Button} ButtonGroup={ButtonGroup} Title={Title} Description={Description} {...props} />
);

export default WrappedFormTemplate;
