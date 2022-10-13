import React from "react";
import ReactDOM from "react-dom";
import { FormRenderer } from "@data-driven-forms/react-form-renderer";
import { componentMapper, FormTemplate } from "../src";
import sandboxSchema from "./demo-schemas/sandbox";

import "@signavio/ui/assets/style.css";

const editMetricFormSchema = {
  fields: [
    {
      component: "text-field",
      name: "name",
      label: "Name",
      validate: [{ type: "required" }],
    },
    {
      component: "textarea",
      name: "description",
      label: "Description",
    },
    {
      component: "radio",
      name: "aggregationType",
      label: "Aggregation type",
      validate: [{ type: "required" }],
      options: [
        { label: "Over cases", value: "CASES" },
        { label: "Over events", value: "EVENTS" },
      ],
    },
    {
      component: "select",
      name: "unit",
      label: "Unit",
      placeholder: "Choose unit type",
      options: [
        { label: "Duration", value: "DURATION" },
        { label: "Currency", value: "CURRENCY" },
        { label: "Suffix", value: "SUFFIX" },
      ],
    },
    {
      component: "select",
      name: "money",
      placeholder: "Currency",
      clearOnUnmount: true,
      condition: { when: "unit", is: "CURRENCY" },
      options: [
        { label: "CZK", value: "CZK" },
        { label: "USD", value: "USD" },
        { label: "EUR", value: "EUR" },
      ],
      validate: [{ type: "required" }],
    },
    {
      component: "text-field",
      name: "suffix",
      placeholder: "Suffix",
      clearOnUnmount: true,
      condition: { when: "unit", is: "SUFFIX" },
      validate: [{ type: "required" }],
    },
    {
      component: "textarea",
      name: "signalFragment",
      label: "Signal fragment",
      minRows: 10,
    },
  ],
};

const App = () => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ maxWidth: 800, marginLeft: "auto", marginRight: "auto" }}>
        <h1>Glucose component mapper</h1>
        <FormRenderer
          onSubmit={console.log}
          componentMapper={componentMapper}
          FormTemplate={(props) => <FormTemplate {...props} disableSubmit={['pristine']} />}
          onCancel={console.log}
          schema={editMetricFormSchema}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
