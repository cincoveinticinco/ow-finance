import { ILayout } from "../components/layout/interfaces/layout.interface";

export const ExampleLayout: ILayout = {
    title: 'Step one',
    blocks: [
        {
            key: 'personal_information_title',
            block_type: 'title',
            classes: 'text-lg px-2',
            config: {
                value: 'Personal information',
                has_separator: true
            }
        },
        {
            key: 'textinput',
            block_type: 'form',
            classes: '',
            config: {
                form: {
                    name: 'personal_data_form',
                    form_type: 'group',
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
                                control_type: 'input',
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
                                value: null
                            },
                            {
                                name: 'age',
                                control_type: 'input',
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
                                    min: 'You must have a legal age',
                                    max: "Age must not exceed 100."
                                },
                                value: null
                            },
                            {
                                name: 'phone',
                                control_type: 'input',
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
            key: 'provider_data_title',
            block_type: 'title',
            classes: 'text-lg px-2',
            config: {
                value: 'Provider data',
                has_separator: true
            }
        },
        {
            key: 'provider_data',
            block_type: 'form',
            classes: '',
            config: {
                form: {
                    name: 'provider-data-form',
                    form_type: 'group',
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
                                control_type: 'input',
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
                                control_type: 'input',
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
                                control_type: 'input',
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
                                control_type: 'input',
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
                                control_type: 'input',
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
                                control_type: 'input',
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
                                control_type: 'input',
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
                                control_type: 'input',
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
                                control_type: 'input',
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
                                control_type: 'input',
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
                                control_type: 'input',
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
                                control_type: 'input',
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
        },
                {
            key: 'legal_contact_title',
            block_type: 'title',
            classes: 'text-lg px-2 mt-2',
            config: {
                value: 'Legal contact',
                has_separator: true
            }
        },
        {
            key: 'legal_contact_text',
            block_type: 'text',
            config: {
                value: 'Include the main and substitues if they exists',
            }
        },
        {
            key: 'main_title',
            block_type: 'title',
            classes: 'text-sm px-2',
            config: {
                value: '1. Main',
            }
        },
        {
            key: 'main_form',
            block_type: 'form',
            classes: 'py-0 col-12',
            config: {
                form: {
                    name: 'main_data',
                    form_type: 'group',
                    classes: '',
                    validators: [
                        {
                            validator_type: 'required'
                        }
                    ],
                    disabled: false,
                    config: {
                        controls: [
                            {
                                key: 'main',
                                name: 'main',
                                form_type: 'array',
                                control_type: 'array',
                                classes: '',
                                validators: [
                                    {
                                        validator_type: 'required'
                                    }
                                ],
                                disabled: false,
                                config: {
                                    controls: [
                                        {
                                            key: 0,
                                            name: '0',
                                            form_type: 'group',
                                            validators: [
                                                {
                                                    validator_type: 'required'
                                                }
                                            ],
                                            disabled: false,
                                            config: {
                                                controls: [
                                                    {
                                                        name: 'main_name',
                                                        control_type: 'input',
                                                        classes: 'col-4',
                                                        validators: [
                                                            {
                                                                validator_type: 'required'
                                                            }
                                                        ],
                                                        disabled: false,
                                                        config: {
                                                            type: 'text',
                                                            label: 'Complete name',
                                                            placeholder: 'John Doe'
                                                        },
                                                        value: null
                                                    },
                                                    {
                                                        name: 'main_document_number',
                                                        control_type: 'input',
                                                        classes: 'col-4',
                                                        validators: [
                                                            {
                                                                validator_type: 'required'
                                                            }
                                                        ],
                                                        disabled: false,
                                                        config: {
                                                            type: 'number',
                                                            label: 'Document number',
                                                            placeholder: '101010100101'
                                                        },
                                                        value: null
                                                    },
                                                    {
                                                        name: 'main_born_country',
                                                        control_type: 'input',
                                                        classes: 'col-4',
                                                        validators: [
                                                            {
                                                                validator_type: 'required'
                                                            }
                                                        ],
                                                        disabled: false,
                                                        config: {
                                                            type: 'text',
                                                            label: 'Born country',
                                                            placeholder: 'Colombia'
                                                        },
                                                        value: null
                                                    },
                                                    {
                                                        name: 'main_phone',
                                                        control_type: 'input',
                                                        classes: 'col-4',
                                                        validators: [
                                                            {
                                                                validator_type: 'required'
                                                            }
                                                        ],
                                                        disabled: false,
                                                        config: {
                                                            type: 'number',
                                                            label: 'Phone',
                                                            placeholder: '3213213213'
                                                        },
                                                        value: null
                                                    },
                                                    {
                                                        name: 'main_charge',
                                                        control_type: 'input',
                                                        classes: 'col-4',
                                                        validators: [
                                                            {
                                                                validator_type: 'required'
                                                            }
                                                        ],
                                                        disabled: false,
                                                        config: {
                                                            type: 'text',
                                                            label: 'Charge',
                                                            placeholder: 'CEO'
                                                        },
                                                        value: null
                                                    },
                                                    {
                                                        name: 'main_email',
                                                        control_type: 'input',
                                                        classes: 'col-4',
                                                        validators: [
                                                            {
                                                                validator_type: 'required'
                                                            }
                                                        ],
                                                        disabled: false,
                                                        config: {
                                                            type: 'email',
                                                            label: 'Email',
                                                            placeholder: 'example@mail.com'
                                                        },
                                                        value: null
                                                    }
                                                ]
                                            }
                                        },
                                    ],
                                    add_config: {
                                        show_add: false
                                    } 
                                }
                            }
                        ],
                    }
                }
            }
        },
        {
            key: 'substitutes_title',
            block_type: 'title',
            classes: 'text-sm px-2',
            config: {
                value: '2. Substitutes',
            }
        },
        {
            key: 'substitutes_form',
            block_type: 'form',
            classes: 'py-0 col-12',
            config: {
                form: {
                    name: 'substitutes_data',
                    form_type: 'group',
                    classes: '',
                    validators: [
                        {
                            validator_type: 'required'
                        }
                    ],
                    disabled: false,
                    config: {
                        controls: [
                            {
                                key: 'substitutes',
                                name: 'substitutes',
                                form_type: 'array',
                                control_type: 'array',
                                classes: '',
                                validators: [
                                    {
                                        validator_type: 'required'
                                    }
                                ],
                                disabled: false,
                                config: {
                                    controls: [
                                        {
                                            form_type: 'group',
                                            validators: [
                                                {
                                                    validator_type: 'required'
                                                }
                                            ],
                                            disabled: false,
                                            config: {
                                                controls: [
                                                    {
                                                        name: 'investor_name',
                                                        control_type: 'input',
                                                        classes: 'col-6',
                                                        validators: [
                                                            {
                                                                validator_type: 'required'
                                                            }
                                                        ],
                                                        disabled: false,
                                                        config: {
                                                            type: 'text',
                                                            label: 'Complete name',
                                                            placeholder: 'John Doe'
                                                        },
                                                        value: null
                                                    },
                                                    {
                                                        name: 'investor_phone',
                                                        control_type: 'input',
                                                        classes: 'col-6',
                                                        validators: [
                                                            {
                                                                validator_type: 'required'
                                                            }
                                                        ],
                                                        disabled: false,
                                                        config: {
                                                            type: 'number',
                                                            label: 'Phone',
                                                            placeholder: '0000000000'
                                                        },
                                                        value: null
                                                    },
                                                    {
                                                        name: 'investor_age',
                                                        control_type: 'input',
                                                        classes: 'col-6 mt-2',
                                                        validators: [
                                                            {
                                                                validator_type: 'required'
                                                            }
                                                        ],
                                                        disabled: false,
                                                        config: {
                                                            type: 'number',
                                                            label: 'Age',
                                                            placeholder: 'test'
                                                        },
                                                        value: null
                                                    }
                                                ]
                                            }
                                        },
                                    ],
                                    add_config: {
                                        show_add: true,
                                        show_index: true,
                                        add_text: 'Add',
                                        limit: 2,
                                        can_remove_first: true
                                    } 
                                }
                            }
                        ],
                    }
                }
            }
        },
        {
            key: 'investors_title',
            block_type: 'title',
            classes: 'text-lg px-2',
            config: {
                value: 'Investors',
                has_separator: true
            }
        },
        {
            key: 'investors_data',
            block_type: 'form',
            classes: '',
            config: {
                form: {
                    name: 'investors_data',
                    form_type: 'group',
                    classes: 'py-0',
                    validators: [
                        {
                            validator_type: 'required'
                        }
                    ],
                    disabled: false,
                    config: {
                        controls: [
                            {
                                key: 'investors',
                                name: 'investors',
                                form_type: 'array',
                                control_type: 'array',
                                classes: 'col-12 py-0',
                                validators: [
                                    {
                                        validator_type: 'required'
                                    }
                                ],
                                disabled: false,
                                config: {
                                    controls: [
                                        {
                                            key: 0,
                                            name: '0',
                                            form_type: 'group',
                                            classes: '',
                                            validators: [
                                                {
                                                    validator_type: 'required'
                                                }
                                            ],
                                            disabled: false,
                                            config: {
                                                controls: [
                                                    {
                                                        name: 'investor_name',
                                                        control_type: 'input',
                                                        classes: 'col-5',
                                                        validators: [
                                                            {
                                                                validator_type: 'required'
                                                            }
                                                        ],
                                                        disabled: false,
                                                        config: {
                                                            type: 'text',
                                                            label: 'Complete name',
                                                            placeholder: 'John Doe'
                                                        },
                                                        value: null
                                                    },
                                                    {
                                                        name: 'investor_document_type',
                                                        control_type: 'input',
                                                        classes: 'col-2',
                                                        validators: [
                                                            {
                                                                validator_type: 'required'
                                                            }
                                                        ],
                                                        disabled: false,
                                                        config: {
                                                            type: 'text',
                                                            label: 'Document type',
                                                            placeholder: 'CC'
                                                        },
                                                        value: null
                                                    },
                                                    {
                                                        name: 'investor_document_number',
                                                        control_type: 'input',
                                                        classes: 'col-2',
                                                        validators: [
                                                            {
                                                                validator_type: 'required'
                                                            }
                                                        ],
                                                        disabled: false,
                                                        config: {
                                                            type: 'text',
                                                            label: 'Document number',
                                                            placeholder: '101010101'
                                                        },
                                                        value: null
                                                    },
                                                    {
                                                        name: 'investor_born_country',
                                                        control_type: 'input',
                                                        classes: 'col-2',
                                                        validators: [
                                                            {
                                                                validator_type: 'required'
                                                            }
                                                        ],
                                                        disabled: false,
                                                        config: {
                                                            type: 'text',
                                                            label: 'Born country',
                                                            placeholder: 'Colombia'
                                                        },
                                                        value: null
                                                    },
                                                    {
                                                        name: 'investor_percentage',
                                                        control_type: 'input',
                                                        classes: 'col-1',
                                                        validators: [
                                                            {
                                                                validator_type: 'required'
                                                            }
                                                        ],
                                                        disabled: false,
                                                        config: {
                                                            type: 'number',
                                                            label: 'Percentage',
                                                            placeholder: 'Colombia'
                                                        },
                                                        value: null
                                                    }
                                                ]
                                            }
                                        },
                                    ],
                                    add_config: {
                                        show_add: true,
                                        show_index: true,
                                        add_text: 'Add',
                                        can_remove_first: false,
                                        limit: 4
                                    } 
                                }
                            }
                        ],
                    }
                }
            }
        },
    ],
    action_config: {
        show_cancel: true,
        show_back: false,
        show_next: true,
        next_text: 'Finish'
    }
} 