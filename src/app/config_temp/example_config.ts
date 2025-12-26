import { ILayout } from "../components/layout/interfaces/layout.interface";

export const ExampleLayout: ILayout = {
    title: 'Registro proveedores nacionales',
    blocks: [
        {
            block_type: 'text',
            config: {
                classes: 'text-md px-2 mb-5 mt-0 text-gray-600',
                value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            }
        },
        {
            block_type: 'section',
            config: {
                id: 'provider_data',
                classes: '',
                value: '', // title value
                // form_type: 'group', // multiple | unique
            },
            blocks: [
                {
                    block_type: 'title',
                    config: {
                        classes: 'text-lg col-12',
                        value: 'Provider data',
                        has_separator: true
                    }
                },
                {
                    block_type: 'input',
                    config: {
                        type: 'text',
                        help_tex: 'test',
                        classes: 'md:col-2 sm:col-12',
                        disabled: false,
                        id: 'personal_type',
                        label: 'Provider type',
                        value: null,
                        validators: [
                            {
                                validator_type: 'required',
                            }
                        ],
                    },
                }
            ]
        },
    ],
    action_config: {
        show_cancel: true,
        show_back: false,
        show_next: true,
        next_text: 'Finish'
    }
} 




// import { ILayout } from "../components/layout/interfaces/layout.interface";

// export const ExampleLayout: ILayout = {
//     title: 'Registro proveedores nacionales',
//     blocks: [
//         {
//             key: 'main_text',
//             block_type: 'text',
//             classes: 'text-md px-2 mb-5 mt-0 text-gray-600',
//             config: {
//                 value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
//             }
//         },
// {
//             key: 'provider_data',
//             block_type: 'section',
//             classes: '',
//             config: {
//                 field_id: 'provider_data',
//                 form_type: 'group',
//                 fields: [
//                     {
//                         control_type: 'title',
//                         classes: 'text-lg col-12',
//                         config: {
//                             value: 'Provider data',
//                             has_separator: true
//                         }
//                     },
//                     {
//                         field_id: 'personal_type',
//                         control_type: 'select',
//                         classes: 'md:col-2 sm:col-12',
//                         validators: [
//                             {
//                                 validator_type: 'required',
//                             }
//                         ],
//                         disabled: false,
//                         config: {
//                             label: 'Provider type',
//                             options: [
//                                 {
//                                     id: 1,
//                                     name: 'Natural',
//                                 },
//                                 {
//                                     id: 2,
//                                     name: 'Juridica',
//                                 },
//                             ],
//                             option_value: 'id',
//                             option_label: 'name',
//                             searchable: true,
//                             multiple: false,
//                         },
//                         value: null
//                     },
//                     {
//                         key: 'changelistdocumenttype',
//                         id: 'document_type',
//                         control_type: 'select',
//                         classes: 'md:col-2 sm:col-12',
//                         validators: [
//                             {
//                                 validator_type: 'required',
//                             }
//                         ],
//                         effects: [
//                             {
//                                 effect_type: 'changelist',
//                                 key: 'changelistdocumenttypeeffect',
//                                 id_control: 'document_type',
//                                 params: [
//                                     'provider_data.personal_type',
//                                     [
//                                         {
//                                             value: 1,
//                                             options: [
//                                                 {
//                                                     id: 1,
//                                                     name: 'Cédula de ciudadanía'
//                                                 },
//                                                 {
//                                                     id: 2,
//                                                     name: 'Pasaporte'
//                                                 },
//                                                 {
//                                                     id: 3,
//                                                     name: 'Cédula de extranjería'
//                                                 },
//                                             ]
//                                         },
//                                         {
//                                             value: 2,
//                                             options: [
//                                                 {
//                                                     id: 1,
//                                                     name: 'NIT'
//                                                 }
//                                             ]
//                                         }
//                                     ]
//                                 ]
//                             }
//                         ],
//                         disabled: false,
//                         config: {
//                             label: 'Document type',
//                             option_value: 'id',
//                             option_label: 'name'
//                         },
//                         value: null
//                     },
//                     {
//                         field_id: 'document_number',
//                         control_type: 'input',
//                         classes: 'md:col-2 sm:col-12',
//                         validators: [
//                             {
//                                 validator_type: 'required',
//                             }
//                         ],
//                         disabled: false,
//                         config: {
//                             type: 'number',
//                             label: 'Document number',
//                             placeholder: '1111111111',
//                             helpText: 'Your document number'
//                         },
//                         value: null
//                     },
//                     {
//                         field_id: 'provider_name',
//                         control_type: 'input',
//                         classes: 'md:col-6 sm:col-12',
//                         validators: [
//                             {
//                                 validator_type: 'required',
//                             }
//                         ],
//                         disabled: false,
//                         config: {
//                             type: 'text',
//                             label: 'Provider name',
//                             placeholder: 'Provider example',
//                             helpText: 'Company name'
//                         },
//                         value: null
//                     },
//                     {
//                         field_id: 'email',
//                         control_type: 'input',
//                         classes: 'md:col-6 sm:col-12',
//                         validators: [
//                             {
//                                 validator_type: 'required',
//                             },
//                             {
//                                 validator_type: 'pattern',
//                                 params: [
//                                     "([A-Za-z0-9\\-!#$%&'*+_](\\.)?)+[A-Za-z0-9\\-!#$%&'*+_]@([A-Za-z0-9\\-!#$%&'*+_])+((\\.)?[A-Za-z0-9]){1}\\.[A-Za-z]{2,6}(\\.[A-Za-z]{2,6})?"
//                                 ]
//                             }
//                         ],
//                         disabled: false,
//                         config: {
//                             type: 'text',
//                             label: 'Email',
//                             placeholder: 'example@mail.com'
//                         },
//                         value: null
//                     },
//                     {
//                         field_id: 'company_phone',
//                         control_type: 'input',
//                         classes: 'md:col-2 sm:col-12',
//                         validators: [
//                             {
//                                 validator_type: 'required',
//                             },
//                             {
//                                 validator_type: 'maxlength',
//                                 params: [10]
//                             },
//                             {
//                                 validator_type: 'minlength',
//                                 params: [7]
//                             }
//                         ],
//                         disabled: false,
//                         config: {
//                             type: 'number',
//                             label: 'Company phone',
//                             placeholder: '9999999999',
//                             helpText: 'Company main phone number'
//                         },
//                         value: null
//                     },
//                     {
//                         field_id: 'contact_person',
//                         control_type: 'input',
//                         classes: 'md:col-4 sm:col-12',
//                         validators: [
//                             {
//                                 validator_type: 'required',
//                             }
//                         ],
//                         disabled: false,
//                         config: {
//                             type: 'text',
//                             label: 'Contact person',
//                             placeholder: 'John Doe'
//                         },
//                         value: null
//                     },
//                     {
//                         field_id: 'company_country',
//                         control_type: 'input',
//                         classes: 'md:col-2 sm:col-12',
//                         validators: [
//                             {
//                                 validator_type: 'required',
//                             }
//                         ],
//                         disabled: false,
//                         config: {
//                             type: 'text',
//                             label: 'Country',
//                             placeholder: 'Colombia'
//                         },
//                         value: null
//                     },
//                     {
//                         field_id: 'company_city',
//                         control_type: 'input',
//                         classes: 'md:col-2 sm:col-12',
//                         validators: [
//                             {
//                                 validator_type: 'required',
//                             }
//                         ],
//                         disabled: false,
//                         config: {
//                             type: 'text',
//                             label: 'City',
//                             placeholder: 'Medellín'
//                         },
//                         value: null
//                     },
//                     {
//                         field_id: 'company_address',
//                         control_type: 'input',
//                         classes: 'md:col-4 sm:col-12',
//                         validators: [
//                             {
//                                 validator_type: 'required',
//                             }
//                         ],
//                         disabled: false,
//                         config: {
//                             type: 'text',
//                             label: 'Address',
//                             placeholder: 'Cll 34 #1 - 80'
//                         },
//                         value: null
//                     },
//                     {
//                         field_id: 'company_place',
//                         control_type: 'input',
//                         classes: 'md:col-2 sm:col-12',
//                         validators: [
//                             {
//                                 validator_type: 'required',
//                             }
//                         ],
//                         disabled: false,
//                         config: {
//                             type: 'text',
//                             label: 'Apto / Office',
//                             placeholder: '201'
//                         },
//                         value: null
//                     },
//                     {
//                         field_id: 'company_zip_code',
//                         control_type: 'input',
//                         classes: 'md:col-2 sm:col-12',
//                         validators: [
//                             {
//                                 validator_type: 'required',
//                             },
//                             {
//                                 validator_type: 'maxlength',
//                                 params: [10]
//                             }
//                         ],
//                         disabled: false,
//                         config: {
//                             type: 'number',
//                             label: 'Zip code',
//                             placeholder: '102110'
//                         },
//                         value: null
//                     },
//                 ]
//             }
//         },
//         {
//             key: 'legal_contact_title',
//             block_type: 'title',
//             classes: 'text-lg px-2 mt-2',
//             config: {
//                 value: 'Legal contact',
//                 has_separator: true
//             }
//         },
//         {
//             key: 'legal_contact_text',
//             block_type: 'text',
//             config: {
//                 value: 'Include the main and substitues if they exists',
//             }
//         },
//         {
//             key: 'main_title',
//             block_type: 'title',
//             classes: 'text-sm px-2',
//             config: {
//                 value: '1. Main',
//             }
//         },
//         {
//             key: 'main_form',
//             block_type: 'section',
//             classes: 'py-0 col-12',
//             config: {
//                 field_id: 'main_contact_data',
//                 form_type: 'group',
//                 fields: [
//                     {
//                         field_id: 'main_name',
//                         control_type: 'input',
//                         classes: 'sm:col-12 md:col-4',
//                         validators: [
//                             {
//                                 validator_type: 'required'
//                             }
//                         ],
//                         disabled: false,
//                         config: {
//                             type: 'text',
//                             label: 'Complete name',
//                             placeholder: 'John Doe'
//                         },
//                         value: null
//                     },
//                     {
//                         field_id: 'main_document_number',
//                         control_type: 'input',
//                         classes: 'sm:col-12 md:col-4',
//                         validators: [
//                             {
//                                 validator_type: 'required'
//                             }
//                         ],
//                         disabled: false,
//                         config: {
//                             type: 'number',
//                             label: 'Document number',
//                             placeholder: '101010100101'
//                         },
//                         value: null
//                     },
//                     {
//                         field_id: 'main_born_country',
//                         control_type: 'input',
//                         classes: 'sm:col-12 md:col-4',
//                         validators: [
//                             {
//                                 validator_type: 'required'
//                             }
//                         ],
//                         disabled: false,
//                         config: {
//                             type: 'text',
//                             label: 'Born country',
//                             placeholder: 'Colombia'
//                         },
//                         value: null
//                     },
//                     {
//                         field_id: 'main_phone',
//                         control_type: 'input',
//                         classes: 'sm:col-12 md:col-4',
//                         validators: [
//                             {
//                                 validator_type: 'required'
//                             }
//                         ],
//                         disabled: false,
//                         config: {
//                             type: 'number',
//                             label: 'Phone',
//                             placeholder: '3213213213'
//                         },
//                         value: null
//                     },
//                     {
//                         field_id: 'main_charge',
//                         control_type: 'input',
//                         classes: 'sm:col-12 md:col-4',
//                         validators: [
//                             {
//                                 validator_type: 'required'
//                             }
//                         ],
//                         disabled: false,
//                         config: {
//                             type: 'text',
//                             label: 'Charge',
//                             placeholder: 'CEO'
//                         },
//                         value: null
//                     },
//                     {
//                         field_id: 'main_email',
//                         control_type: 'input',
//                         classes: 'sm:col-12 md:col-4',
//                         validators: [
//                             {
//                                 validator_type: 'required'
//                             }
//                         ],
//                         disabled: false,
//                         config: {
//                             type: 'email',
//                             label: 'Email',
//                             placeholder: 'example@mail.com'
//                         },
//                         value: null
//                     }
//                 ]
//             }
//         },
//         {
//             key: 'substitutes_title',
//             block_type: 'title',
//             classes: 'text-sm px-2',
//             config: {
//                 value: '2. Substitutes',
//             }
//         },
//         {
//             key: 'substitutes_form',
//             block_type: 'array',
//             classes: 'py-0 col-12',
//             config: {
//                 field_id: 'substitutes_data',
//                 form_type: 'array',
//                 control_type: 'array',
//                 groups: [
//                     {
//                         form_type: 'group',
//                         config: {
//                             fields: [
//                                 {
//                                     field_id: 'investor_name',
//                                     control_type: 'input',
//                                     classes: 'col-6',
//                                     validators: [
//                                         {
//                                             validator_type: 'required'
//                                         }
//                                     ],
//                                     disabled: false,
//                                     config: {
//                                         type: 'text',
//                                         label: 'Complete name',
//                                         placeholder: 'John Doe'
//                                     },
//                                     value: null
//                                 },
//                                 {
//                                     field_id: 'investor_phone',
//                                     control_type: 'input',
//                                     classes: 'col-6',
//                                     validators: [
//                                         {
//                                             validator_type: 'required'
//                                         }
//                                     ],
//                                     disabled: false,
//                                     config: {
//                                         type: 'number',
//                                         label: 'Phone',
//                                         placeholder: '0000000000'
//                                     },
//                                     value: null
//                                 },
//                                 {
//                                     field_id: 'investor_age',
//                                     control_type: 'input',
//                                     classes: 'col-6 mt-2',
//                                     validators: [
//                                         {
//                                             validator_type: 'required'
//                                         }
//                                     ],
//                                     disabled: false,
//                                     config: {
//                                         type: 'number',
//                                         label: 'Age',
//                                         placeholder: 'test'
//                                     },
//                                     value: null
//                                 }
//                             ]
//                         }
//                     },
//                 ],
//                 add_config: {
//                     show_add: true,
//                     show_index: true,
//                     add_text: 'Add',
//                     limit: 2,
//                     can_remove_first: true
//                 } 
//             }
//         },
//         {
//             key: 'investors_title',
//             block_type: 'title',
//             classes: 'text-lg px-2',
//             config: {
//                 value: 'Investors',
//                 has_separator: true
//             }
//         },
//         {
//             key: 'investors_data',
//             block_type: 'array',
//             classes: '',
//             config: {
//                 field_id: 'investors_data',
//                 form_type: 'array',
//                 control_type: 'array',
//                 groups: [
//                     {
//                         key: 0,
//                         name: '0',
//                         form_type: 'group',
//                         config: {
//                             fields: [
//                                 {
//                                     name: 'investor_name',
//                                     control_type: 'input',
//                                     classes: 'col-5',
//                                     validators: [
//                                         {
//                                             validator_type: 'required'
//                                         }
//                                     ],
//                                     disabled: false,
//                                     config: {
//                                         type: 'text',
//                                         label: 'Complete name',
//                                         placeholder: 'John Doe'
//                                     },
//                                     value: null
//                                 },
//                                 {
//                                     name: 'investor_document_type',
//                                     control_type: 'input',
//                                     classes: 'col-2',
//                                     validators: [
//                                         {
//                                             validator_type: 'required'
//                                         }
//                                     ],
//                                     disabled: false,
//                                     config: {
//                                         type: 'text',
//                                         label: 'Document type',
//                                         placeholder: 'CC'
//                                     },
//                                     value: null
//                                 },
//                                 {
//                                     name: 'investor_document_number',
//                                     control_type: 'input',
//                                     classes: 'col-2',
//                                     validators: [
//                                         {
//                                             validator_type: 'required'
//                                         }
//                                     ],
//                                     disabled: false,
//                                     config: {
//                                         type: 'text',
//                                         label: 'Document number',
//                                         placeholder: '101010101'
//                                     },
//                                     value: null
//                                 },
//                                 {
//                                     name: 'investor_born_country',
//                                     control_type: 'input',
//                                     classes: 'col-2',
//                                     validators: [
//                                         {
//                                             validator_type: 'required'
//                                         }
//                                     ],
//                                     disabled: false,
//                                     config: {
//                                         type: 'text',
//                                         label: 'Born country',
//                                         placeholder: 'Colombia'
//                                     },
//                                     value: null
//                                 },
//                                 {
//                                     name: 'investor_percentage',
//                                     control_type: 'input',
//                                     classes: 'col-1',
//                                     validators: [
//                                         {
//                                             validator_type: 'required'
//                                         }
//                                     ],
//                                     disabled: false,
//                                     config: {
//                                         type: 'number',
//                                         label: 'Percentage',
//                                         placeholder: 'Colombia'
//                                     },
//                                     value: null
//                                 }
//                             ]
//                         }
//                     },
//                 ],
//                 add_config: {
//                     show_add: true,
//                     show_index: true,
//                     add_text: 'Add',
//                     can_remove_first: false,
//                     limit: 4
//                 }
//             }
//         },
//     ],
//     action_config: {
//         show_cancel: true,
//         show_back: false,
//         show_next: true,
//         next_text: 'Finish'
//     }
// } 