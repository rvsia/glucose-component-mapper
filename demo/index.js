import React from 'react';
import ReactDOM from 'react-dom';
import { FormRenderer } from '@data-driven-forms/react-form-renderer';
import { componentMapper, FormTemplate } from '../src';
import sandboxSchema from './demo-schemas/sandbox';

import '@signavio/ui/assets/style.css';

const App = () => {

  return (
    <div style={{ width: '100%' }}>
      <div style={{ maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
        <h1>Glucose component mapper</h1>
        <FormRenderer
          onSubmit={console.log}
          componentMapper={componentMapper}
          FormTemplate={(props) => <FormTemplate {...props} />}
          onCancel={console.log}
          schema={sandboxSchema}
        />
      </div>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
