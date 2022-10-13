import React from 'react';
import PropTypes from 'prop-types';

import { useFormApi } from '@data-driven-forms/react-form-renderer';

import { TabBar, Tab } from '@signavio/ui';

const Tabs = ({ fields }) => {
  const formOptions = useFormApi();

  const [activeTab, setActiveTab] = React.useState(fields[0].name);

  return (
    <React.Fragment>
      <TabBar>
        {
          fields.map((tab) => (
            <Tab
              active={activeTab === tab.name}
              onClick={() => setActiveTab(tab.name)}
              key={tab.name}
            >
              {tab.label}
            </Tab>
          ))
        }
      </TabBar>
      {
        fields.map((tab) => (
          <div key={tab.name} hidden={activeTab !== tab.name}>
            {formOptions.renderForm(tab.fields, formOptions)}
          </div>
        ))
      }
    </React.Fragment>
  )
};

Tabs.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      fields: PropTypes.array,
      title: PropTypes.node
    })
  )
};

export default Tabs;
