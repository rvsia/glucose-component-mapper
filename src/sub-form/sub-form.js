import React from 'react';
import PropTypes from 'prop-types';

import { useFormApi } from '@data-driven-forms/react-form-renderer';

import { Group } from '@signavio/ui';
import { Stack } from '@signavio/ui/core';

const SubForm = ({ fields, name, ...rest }) => {
  const formOptions = useFormApi();

  return <Group {...rest}>
      <Stack spacing="small" direction="vertical">
        {formOptions.renderForm(fields, formOptions)}
      </Stack>
    </Group>;
};

SubForm.propTypes = {
  fields: PropTypes.array
};

export default SubForm;
