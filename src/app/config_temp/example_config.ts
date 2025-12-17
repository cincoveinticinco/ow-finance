import { ILayout } from "../components/layout/interfaces/layout.interface";

export const ExampleLayout: ILayout = {
    title: 'Step one',
    blocks: [
        {
            key: 'personal-information-title',
            block_type: 'title',
            classes: 'text-lg px-2',
            config: {
                value: 'Personal information',
                hasSeparator: true
            }
        },
        {
            key: 'textinput',
            block_type: 'form',
            classes: '',
            config: {
                control: {
                    name: 'personal-data-form',
                    control_type: 'group',
                    classes: '',
                    validators: [
                        {
                            validator_type: 'required'
                        },
                    ],
                    disabled: false,
                    config: {
                        controls: [
                            {
                                name: 'full_name',
                                type: 'input',
                                classes: 'md:col-4 sm:col-12',
                                validators: [
                                    {
                                        validator_type: 'required',
                                    },
                                    {
                                        validator_type: 'maxlength',
                                        params: [10]
                                    },
                                    {
                                        validator_type: 'minlength',
                                        params: [5]
                                    }
                                ],
                                disabled: false,
                                config: {
                                    type: 'text',
                                    label: 'Full name',
                                    placeholder: 'Placeholder',
                                },
                                config_messages: {
                                    required: 'This field is required',
                                    maxlength: 'It must not exceed 10 characters.',
                                    minlength: 'It must be at least 5 characters.',
                                },
                                value: null
                            },
                            {
                                name: 'age',
                                type: 'input',
                                classes: 'md:col-4 sm:col-12',
                                validators: [
                                    {
                                        validator_type: 'required',
                                    },
                                    {
                                        validator_type: 'min',
                                        params: [18]
                                    },
                                    {
                                        validator_type: 'max',
                                        params: [100]
                                    }
                                ],
                                disabled: false,
                                config: {
                                    type: 'number',
                                    label: 'Age',
                                    placeholder: 'Age',
                                    helpText: 'Your age'
                                },
                                config_messages: {
                                    required: 'Your age',
                                    min: 'You must have a legal age',
                                    max: "Age must not exceed 100."
                                },
                                value: null
                            },
                            {
                                name: 'phone',
                                type: 'input',
                                classes: 'md:col-4 sm:col-12',
                                validators: [
                                    {
                                        validator_type: 'required',
                                    },
                                    {
                                        validator_type: 'maxlength',
                                        params: [10]
                                    },
                                    {
                                        validator_type: 'minlength',
                                        params: [7]
                                    }
                                ],
                                disabled: false,
                                config: {
                                    type: 'number',
                                    label: 'Phone',
                                    placeholder: 'Phone',
                                    helpText: 'This is your phone number'
                                },
                                config_messages: {
                                    required: 'This field is required',
                                    maxlength: 'It must not exceed 10 characters.',
                                    minlength: 'It must be at least 7 characters.',
                                },
                                value: null
                            },
                            // {
                            //     name: 'person_type',
                            //     type: 'select',
                            //     classes: 'w-3',
                            //     validators: [{
                            //         validator_type: 'required',
                            //     }],
                            //     disabled: false,
                            //     config: {
                            //         label: 'Person type',
                            //         placeholder: 'Person',
                            //         helpText: 'This is select field',
                            //         itemsKey: 'person_types',
                            //         optionLabel: 'name',
                            //         optionValue: 'value'
                            //     },
                            //     config_messages: {
                            //         'required': 'This field is required'
                            //     },
                            //     value: 'Test'
                            // }
                        ]
                    }
                },
            }
        },
        {
            key: 'provider-data-title',
            block_type: 'title',
            classes: 'text-lg px-2',
            config: {
                value: 'Provider data',
                hasSeparator: true
            }
        },
        {
            key: 'provider-data',
            block_type: 'form',
            classes: '',
            config: {
                control: {
                    name: 'provider-data-form',
                    control_type: 'group',
                    classes: '',
                    validators: [
                        {
                            validator_type: 'required'
                        },
                    ],
                    disabled: false,
                    config: {
                        controls: [
                            {
                                name: 'personal_type',
                                type: 'input',
                                classes: 'md:col-2 sm:col-12',
                                validators: [
                                    {
                                        validator_type: 'required',
                                    },
                                    {
                                        validator_type: 'maxlength',
                                        params: [30]
                                    },
                                    {
                                        validator_type: 'minlength',
                                        params: [5]
                                    }
                                ],
                                disabled: false,
                                config: {
                                    type: 'text',
                                    label: 'Provider type',
                                    placeholder: 'Provider type',
                                },
                                config_messages: {
                                    required: 'This field is required',
                                    maxlength: 'It must not exceed 30 characters.',
                                    minlength: 'It must be at least 5 characters.',
                                },
                                value: null
                            },
                            {
                                name: 'document_type',
                                type: 'input',
                                classes: 'md:col-2 sm:col-12',
                                validators: [
                                    {
                                        validator_type: 'required',
                                    },
                                    {
                                        validator_type: 'maxlength',
                                        params: [20]
                                    },
                                    {
                                        validator_type: 'minlength',
                                        params: [5]
                                    }
                                ],
                                disabled: false,
                                config: {
                                    type: 'text',
                                    label: 'Document type',
                                    placeholder: 'Document type',
                                    helpText: 'The document type'
                                },
                                config_messages: {
                                    required: 'This field is required',
                                    maxlength: 'It must not exceed 20 characters.',
                                    minlength: 'It must be at least 5 characters.',
                                },
                                value: null
                            },
                            {
                                name: 'document_number',
                                type: 'input',
                                classes: 'md:col-2 sm:col-12',
                                validators: [
                                    {
                                        validator_type: 'required',
                                    }
                                ],
                                disabled: false,
                                config: {
                                    type: 'number',
                                    label: 'Document number',
                                    placeholder: '1111111111',
                                    helpText: 'Your document number'
                                },
                                config_messages: {
                                    required: 'This field is required'
                                },
                                value: null
                            },
                            {
                                name: 'provider_name',
                                type: 'input',
                                classes: 'md:col-6 sm:col-12',
                                validators: [
                                    {
                                        validator_type: 'required',
                                    }
                                ],
                                disabled: false,
                                config: {
                                    type: 'text',
                                    label: 'Provider name',
                                    placeholder: 'Provider example',
                                    helpText: 'Company name'
                                },
                                config_messages: {
                                    required: 'This field is required'
                                },
                                value: null
                            },
                            {
                                name: 'email',
                                type: 'input',
                                classes: 'md:col-6 sm:col-12',
                                validators: [
                                    {
                                        validator_type: 'required',
                                    },
                                    {
                                        validator_type: 'pattern',
                                        params: [
                                            "([A-Za-z0-9\\-!#$%&'*+_](\\.)?)+[A-Za-z0-9\\-!#$%&'*+_]@([A-Za-z0-9\\-!#$%&'*+_])+((\\.)?[A-Za-z0-9]){1}\\.[A-Za-z]{2,6}(\\.[A-Za-z]{2,6})?"
                                        ]
                                    }
                                ],
                                disabled: false,
                                config: {
                                    type: 'text',
                                    label: 'Email',
                                    placeholder: 'example@mail.com'
                                },
                                config_messages: {
                                    required: 'This field is required',
                                    pattern: 'It needs to be a correct email',
                                },
                                value: null
                            },
                            {
                                name: 'company_phone',
                                type: 'input',
                                classes: 'md:col-2 sm:col-12',
                                validators: [
                                    {
                                        validator_type: 'required',
                                    },
                                    {
                                        validator_type: 'maxlength',
                                        params: [10]
                                    },
                                    {
                                        validator_type: 'minlength',
                                        params: [7]
                                    }
                                ],
                                disabled: false,
                                config: {
                                    type: 'number',
                                    label: 'Company phone',
                                    placeholder: '9999999999',
                                    helpText: 'Company main phone number'
                                },
                                config_messages: {
                                    required: 'This field is required',
                                    maxlength: 'It must not exceed 10 characters.',
                                    minlength: 'It must be at least 7 characters.',
                                },
                                value: null
                            },
                            {
                                name: 'contact_person',
                                type: 'input',
                                classes: 'md:col-4 sm:col-12',
                                validators: [
                                    {
                                        validator_type: 'required',
                                    }
                                ],
                                disabled: false,
                                config: {
                                    type: 'text',
                                    label: 'Contact person',
                                    placeholder: 'John Doe'
                                },
                                config_messages: {
                                    required: 'This field is required'
                                },
                                value: null
                            },
                            {
                                name: 'company_country',
                                type: 'input',
                                classes: 'md:col-2 sm:col-12',
                                validators: [
                                    {
                                        validator_type: 'required',
                                    }
                                ],
                                disabled: false,
                                config: {
                                    type: 'text',
                                    label: 'Country',
                                    placeholder: 'Colombia'
                                },
                                config_messages: {
                                    required: 'This field is required'
                                },
                                value: null
                            },
                            {
                                name: 'company_city',
                                type: 'input',
                                classes: 'md:col-2 sm:col-12',
                                validators: [
                                    {
                                        validator_type: 'required',
                                    }
                                ],
                                disabled: false,
                                config: {
                                    type: 'text',
                                    label: 'City',
                                    placeholder: 'Medellín'
                                },
                                config_messages: {
                                    required: 'This field is required'
                                },
                                value: null
                            },
                            {
                                name: 'company_address',
                                type: 'input',
                                classes: 'md:col-4 sm:col-12',
                                validators: [
                                    {
                                        validator_type: 'required',
                                    }
                                ],
                                disabled: false,
                                config: {
                                    type: 'text',
                                    label: 'Address',
                                    placeholder: 'Cll 34 #1 - 80'
                                },
                                config_messages: {
                                    required: 'This field is required'
                                },
                                value: null
                            },
                            {
                                name: 'company_place',
                                type: 'input',
                                classes: 'md:col-2 sm:col-12',
                                validators: [
                                    {
                                        validator_type: 'required',
                                    }
                                ],
                                disabled: false,
                                config: {
                                    type: 'text',
                                    label: 'Apto / Office',
                                    placeholder: '201'
                                },
                                config_messages: {
                                    required: 'This field is required'
                                },
                                value: null
                            },
                            {
                                name: 'company_zip_code',
                                type: 'input',
                                classes: 'md:col-2 sm:col-12',
                                validators: [
                                    {
                                        validator_type: 'required',
                                    },
                                    {
                                        validator_type: 'maxlength',
                                        params: [10]
                                    }
                                ],
                                disabled: false,
                                config: {
                                    type: 'number',
                                    label: 'Zip code',
                                    placeholder: '102110'
                                },
                                config_messages: {
                                    required: 'This field is required',
                                    maxlength: 'It must not exceed 10 characters'
                                },
                                value: null
                            },
                        ]
                    }
                },
            }
            
        }
    ],
    action_config: {
        show_cancel: true,
        show_back: false,
        show_next: true,
        next_text: 'Finish'
    }
} 