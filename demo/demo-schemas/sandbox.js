/* eslint-disable camelcase */
import { componentTypes as components, validatorTypes as validators } from '@data-driven-forms/react-form-renderer';

const asyncOptions = [
  { label: 'async-option-1', value: 'async-option-1' },
  { label: 'async-option-2', value: 'async-option-2' },
  { label: 'async-option-3', value: 'async-option-3' },
  { label: 'async option pepa 1', value: 'async-option-4' },
  { label: 'async option pepa 2', value: 'async-option-5' }
];

const baseOptions = asyncOptions.slice(0, 3);

const asyncLoadOptions = (searchValue) =>
  new Promise((resolve) =>
    setTimeout(() => {
      if (searchValue && searchValue.trim() !== '') {
        return resolve(asyncOptions.filter(({ label }) => label.toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase())));
      }

      return resolve(baseOptions);
    }, 2000)
  );

const output = {
  label: 'Testing dialog',
  description: 'Description of testing Dialog',
  fields: [
    {
      fields: [
        {
          label: 'Tab 1',
          description: 'Text boxes and text areas',
          name: '553',
          fields: [
            {
              label: 'Text boxes',
              description: 'text boxes a lot of them',
              hint: 'this is hint',
              name: '637',
              fields: [
                {
                  name: 'switch_1',
                  onText: 'Switch is on',
                  offText: 'Switch is off',
                  label: 'Switch',
                  component: components.SWITCH
                },
                {
                  name: 'switch_2',
                  label: 'Switch disabled',
                  component: components.SWITCH,
                  isDisabled: true
                },
                {
                  name: 'switch_3',
                  label: 'Switch readOnly',
                  component: components.SWITCH,
                  isReadOnly: true
                },
                {
                  name: 'text_box_2',
                  label: 'Text Box with help',
                  hint: 'Helper text',
                  component: components.TEXT_FIELD
                },
                {
                  name: 'text_box_3',
                  label: 'Text Box required',
                  isRequired: true,
                  component: components.TEXT_FIELD,
                  validate: [{ type: validators.REQUIRED }]
                },
                {
                  name: 'text_box_4',
                  label: 'Text Box readonly',
                  isReadOnly: true,
                  component: components.TEXT_FIELD
                },
                {
                  name: 'text_box_5',
                  label: 'Text Box default',
                  component: components.TEXT_FIELD
                },
                {
                  name: 'text_box_6',
                  label: 'Text Box unvisible',
                  label: 'Text Box unvisible',
                  component: components.TEXT_FIELD
                },
                {
                  name: 'text_box_7',
                  label: 'Text Box with validator',
                  label: 'Text Box with validator',
                  validate: [
                    {
                      type: validators.PATTERN,
                      pattern: '[0-9]'
                    }
                  ],
                  component: components.TEXT_FIELD
                },
                {
                  name: 'text_box_8',
                  label: 'Text Box integer value',
                  label: 'Text Box integer value',
                  dataType: 'integer',
                  component: components.TEXT_FIELD,
                  type: 'number'
                },
                {
                  name: 'text_box_9',
                  label: 'Text Box string value',
                  label: 'Text Box string value',
                  dataType: 'string',
                  component: components.TEXT_FIELD
                }
              ],
              component: components.SUB_FORM
            },
            {
              label: 'Text areas',
              name: '638',
              fields: [
                {
                  name: 'textarea_box_1',
                  label: 'Text Area',
                  label: 'Text Area',
                  component: components.TEXTAREA
                }
              ],
              component: components.SUB_FORM
            }
          ],
          component: components.TAB_ITEM
        },
        {
          label: 'Tab 2',
          description: 'Checks',
          name: '554',
          fields: [
            {
              label: 'Check boxes',
              name: '639',
              fields: [
                {
                  name: 'check_box_1',
                  label: 'Check Box',
                  component: components.CHECKBOX,
                  options: [
                    {
                      value: 1,
                      label: 'Option 1'
                    },
                    {
                      value: 2,
                      label: 'Option 2'
                    }
                  ]
                },
                {
                  name: 'check_box_2',
                  label: 'Check Box checked',
                  component: components.CHECKBOX
                }
              ],
              component: components.SUB_FORM
            },
            {
              label: 'Radios',
              name: '640',
              fields: [
                {
                  name: 'radio_button_1',
                  label: 'Radio Button',
                  label: 'Radio Button',
                  dataType: 'string',
                  component: components.RADIO,
                  options: [
                    {
                      label: 'One',
                      value: '1'
                    },
                    {
                      label: 'Two',
                      value: '2'
                    },
                    {
                      label: 'Three',
                      value: '3'
                    }
                  ]
                },
                {
                  name: 'radio_button_2',
                  label: 'Radio Button sorted by',
                  label: 'Radio Button sorted by',
                  dataType: 'string',
                  component: components.RADIO,
                  options: [
                    {
                      label: 'One',
                      value: '1'
                    },
                    {
                      label: 'Two',
                      value: '2'
                    },
                    {
                      label: 'Three',
                      value: '3'
                    }
                  ]
                },
                {
                  name: 'radio_button_4',
                  label: 'Radio Button default',
                  dataType: 'string',
                  component: components.RADIO,
                  options: [
                    {
                      label: 'One',
                      value: '1'
                    },
                    {
                      label: 'Two',
                      value: '2'
                    },
                    {
                      label: 'Three',
                      value: '3'
                    }
                  ]
                }
              ],
              component: components.SUB_FORM
            }
          ],
          component: components.TAB_ITEM
        },
        {
          label: 'Tab 3',
          description: '',
          name: '555',
          fields: [
            {
              label: 'Dropdowns',
              name: '641',
              fields: [
                {
                  name: 'async-drop-down',
                  label: 'Async dropdown',
                  dataType: 'string',
                  isSearchable: true,
                  isClearable: true,
                  isMulti: true,
                  component: components.SELECT,
                  loadOptions: asyncLoadOptions
                },
                {
                  name: 'dropdown_list_1',
                  label: 'Dropdown',
                  dataType: 'string',
                  isSearchable: true,
                  isClearable: false,
                  isMulti: true,
                  component: components.SELECT,
                  options: [
                    {
                      // eslint-disable-next-line max-len
                      label:
                        'dropdown_list_1 dropdown_list_1 dropdown_list_1 dropdown_list_1 dropdown_list_1 dropdown_list_1 dropdown_list_1 dropdown_list_1 dropdown_list_1 dropdown_list_1 ',
                      value: 'foo'
                    },
                    {
                      label: 'One',
                      value: '1'
                    },
                    {
                      label: 'Three',
                      value: '3'
                    },
                    {
                      label: 'Two',
                      value: '2'
                    }
                  ]
                },
                {
                  name: 'dropdown_list_2',
                  label: 'Dropdown default value',
                  dataType: 'string',
                  component: components.SELECT,
                  isClearable: true,
                  options: [
                    {
                      label: '<None>',
                      value: null
                    },
                    {
                      label: 'One',
                      value: '1'
                    },
                    {
                      label: 'Three',
                      value: '3'
                    },
                    {
                      label: 'Two',
                      value: '2'
                    }
                  ]
                },
                {
                  name: 'dropdown_list_3',
                  label: 'Dropdown multiselect',
                  dataType: 'string',
                  component: components.SELECT,
                  isSearchable: true,
                  isMulti: true,
                  //simpleValue: false,
                  options: [
                    {
                      label: '<None>',
                      value: undefined
                    },
                    {
                      label: 'One',
                      value: '1'
                    },
                    {
                      label: 'Three',
                      value: '3'
                    },
                    {
                      label: 'Two',
                      value: '2'
                    },
                    {
                      label: 'Four',
                      value: '4'
                    },
                    {
                      label: 'Five',
                      value: '5'
                    },
                    {
                      label: 'Six',
                      value: '6'
                    },
                    {
                      label: 'Seven',
                      value: '7'
                    },
                    {
                      label: 'Eight',
                      value: '8'
                    }
                  ]
                },
                {
                  name: 'dropdown_list_4',
                  label: 'Dropdown sort by value',
                  dataType: 'string',
                  component: components.SELECT,
                  isSearchable: true,
                  options: [
                    {
                      label: '<None>',
                      value: null
                    },
                    {
                      label: 'One',
                      value: '1'
                    },
                    {
                      label: 'Two',
                      value: '2'
                    },
                    {
                      label: 'Three',
                      value: '3'
                    }
                  ]
                },
                {
                  name: 'dropdown_list_5',
                  label: 'Creatable multi select',
                  component: components.SELECT,
                  isMulti: true,
                  isClearable: true,
                  selectVariant: 'createable',
                  options: [
                    {
                      label: 'One',
                      value: '1'
                    },
                    {
                      label: 'Two',
                      value: '2'
                    },
                    {
                      label: 'Three',
                      value: '3'
                    }
                  ]
                }
              ],
              component: components.SUB_FORM
            }
          ],
          component: components.TAB_ITEM
        },
        {
          label: 'Tab 4',
          description: '',
          name: '556',
          fields: [
            {
              label: 'Datepickers',
              name: '642',
              fields: [
                {
                  name: 'date_control_1',
                  label: 'Datepicker',
                  component: components.DATE_PICKER
                },
                {
                  name: 'date_control_2',
                  label: 'Datepicker with past days',
                  component: components.DATE_PICKER
                }
              ],
              component: components.SUB_FORM
            },
            {
              label: 'Timepickers',
              name: '643',
              fields: [
                {
                  name: 'date_time_control_1',
                  label: 'Timepicker',
                  component: components.TIME_PICKER
                },
                {
                  name: 'date_time_control_2',
                  label: 'Timepicker with past days',
                  component: components.TIME_PICKER
                }
              ],
              component: components.SUB_FORM
            }
          ],
          component: components.TAB_ITEM
        },
        {
          label: 'Mixed',
          description: '',
          name: '558',
          fields: [
            {
              label: 'New Section',
              name: '645',
              fields: [
                {
                  name: 'text_box_10',
                  label: 'Text Box',
                  component: components.TEXT_FIELD
                },
                {
                  name: 'textarea_box_2',
                  label: 'Text Area',
                  component: components.TEXTAREA
                },
                {
                  name: 'check_box_3',
                  label: 'Check Box',
                  component: components.CHECKBOX
                },
                {
                  name: 'check_box_4',
                  label: 'Check Box',
                  component: components.CHECKBOX
                },
                {
                  name: 'dropdown_list_5',
                  label: 'Dropdown',
                  dataType: 'string',
                  component: components.SELECT,
                  options: [
                    {
                      label: '<None>',
                      value: null
                    },
                    {
                      label: 'One',
                      value: '1'
                    },
                    {
                      label: 'Three',
                      value: '3'
                    },
                    {
                      label: 'Two',
                      value: '2'
                    }
                  ]
                },
                {
                  name: 'radio_button_3',
                  label: 'Radio Button',
                  label: 'Radio Button',
                  dataType: 'string',
                  component: components.RADIO,
                  options: [
                    {
                      label: 'One',
                      value: '1'
                    },
                    {
                      label: 'Two',
                      value: '2'
                    },
                    {
                      label: 'Three',
                      value: '3'
                    }
                  ]
                },
                {
                  name: 'date_time_control_3',
                  label: 'Timepicker',
                  component: components.TIME_PICKER
                }
              ],
              component: components.SUB_FORM
            }
          ],
          component: components.TAB_ITEM
        }
      ],
      component: components.TABS,
      name: '57'
    }
  ]
};

export const defaultValues = {
  text_box_5: '"hello"',
  check_box_2: 'true',
  radio_button_4: '2',
  dropdown_list_2: '2'
};

export default output;
