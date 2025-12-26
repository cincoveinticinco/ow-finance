import { ILayout } from "../components/layout/interfaces/layout.interface";

export const ExampleLayout: ILayout = {
    title: 'Step one',
    blocks: [
        {
            key: 'main_title',
            block_type: 'title',
            classes: 'text-lg px-2',
            config: {
                value: 'Personal information',
                has_separator: true
            }
        },
        {
            key: 'full_name_input',
            block_type: 'input',
            classes: '',
            config: {
                field_id: 'full_name',
                validators: [
                    {
                        validator_type: 'required',
                    }
                ],
                disabled: false,
                config: {
                    type: 'text',
                    label: 'Full name',
                    placeholder: 'test',
                },
                value: null
            }
        },
        {
            key: 'personal_data_form',
            block_type: 'section',
            classes: '',
            config: {
                field_id: 'personal_data',
                form_type: 'group',
                controls: [
                    {
                        field_id: 'full_name',
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
                            placeholder: 'test',
                        },
                        value: null
                    },
                    {
                        control_type: 'title',
                        classes: 'md:col-12 sm:col-12 text-lg',
                        config: {
                            value: 'Test title',
                            has_separator: true
                        },
                    },
                    {
                        field_id: 'age',
                        control_type: 'input',
                        classes: 'md:col-6 sm:col-12',
                        validators: [
                            {
                                validator_type: 'required',
                            },
                            {
                                validator_type: 'min',
                                params: [18],
                                error_message: 'You must have a legal age'
                            },
                            {
                                validator_type: 'max',
                                params: [100],
                                error_message: "Age must not exceed 100."
                            }
                        ],
                        disabled: false,
                        config: {
                            type: 'number',
                            label: 'Age',
                            placeholder: 'Age',
                            helpText: 'Your age'
                        },
                        value: null
                    },
                    {
                        field_id: 'phone',
                        control_type: 'phone',
                        classes: 'md:col-6 sm:col-12',
                        validators: [
                            {
                                validator_type: 'required',
                            }
                        ],
                        disabled: false,
                        config: {
                            label: 'Phone',
                            placeholder: 'Phone',
                            helpText: 'This is your phone number',
                            show_countries: true,
                            default_country: 'CO'
                        },
                        value: null
                    },
                ],
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
            block_type: 'section',
            classes: '',
            config: {
                field_id: 'provider_data',
                form_type: 'group',
                controls: [
                    {
                        field_id: 'personal_type',
                        control_type: 'select',
                        classes: 'md:col-2 sm:col-12',
                        validators: [
                            {
                                validator_type: 'required',
                            }
                        ],
                        disabled: false,
                        config: {
                            label: 'Provider type',
                            options: [
                                {
                                    id: 1,
                                    name: 'Natural',
                                },
                                {
                                    id: 2,
                                    name: 'Juridica',
                                },
                            ],
                            option_value: 'id',
                            option_label: 'name',
                            searchable: true,
                            multiple: false,
                        },
                        value: null
                    },
                    {
                        key: 'changelistdocumenttype',
                        field_id: 'document_type',
                        control_type: 'select',
                        classes: 'md:col-2 sm:col-12',
                        validators: [
                            {
                                validator_type: 'required',
                            }
                        ],
                        effects: [
                            {
                                effect_type: 'changelist',
                                key: 'changelistdocumenttypeeffect',
                                key_control: 'changelistdocumenttype',
                                params: [
                                    'provider_data.personal_type',
                                    [
                                        {
                                            value: 1,
                                            options: [
                                                {
                                                    id: 1,
                                                    name: 'Cédula de ciudadanía'
                                                },
                                                {
                                                    id: 2,
                                                    name: 'Pasaporte'
                                                },
                                                {
                                                    id: 3,
                                                    name: 'Cédula de extranjería'
                                                },
                                            ]
                                        },
                                        {
                                            value: 2,
                                            options: [
                                                {
                                                    id: 1,
                                                    name: 'NIT'
                                                }
                                            ]
                                        }
                                    ]
                                ]
                            }
                        ],
                        disabled: false,
                        config: {
                            label: 'Provider type',
                            option_value: 'id',
                            option_label: 'name'
                        },
                        value: null
                    },
                    {
                        field_id: 'document_number',
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
                        value: null
                    },
                    {
                        field_id: 'provider_name',
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
                        value: null
                    },
                    {
                        field_id: 'email',
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
                        value: null
                    },
                    {
                        field_id: 'company_phone',
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
                        value: null
                    },
                    {
                        field_id: 'contact_person',
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
                        value: null
                    },
                    {
                        field_id: 'company_country',
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
                        value: null
                    },
                    {
                        field_id: 'company_city',
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
                        value: null
                    },
                    {
                        field_id: 'company_address',
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
                        value: null
                    },
                    {
                        field_id: 'company_place',
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
                        value: null
                    },
                    {
                        field_id: 'company_zip_code',
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
                        value: null
                    },
                ]
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
            block_type: 'section',
            classes: 'py-0 col-12',
            config: {
                field_id: 'main_contact_data',
                form_type: 'group',
                controls: [
                    {
                        field_id: 'main_name',
                        control_type: 'input',
                        classes: 'sm:col-12 md:col-4',
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
                        field_id: 'main_document_number',
                        control_type: 'input',
                        classes: 'sm:col-12 md:col-4',
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
                        field_id: 'main_born_country',
                        control_type: 'input',
                        classes: 'sm:col-12 md:col-4',
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
                        field_id: 'main_phone',
                        control_type: 'input',
                        classes: 'sm:col-12 md:col-4',
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
                        field_id: 'main_charge',
                        control_type: 'input',
                        classes: 'sm:col-12 md:col-4',
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
                        field_id: 'main_email',
                        control_type: 'input',
                        classes: 'sm:col-12 md:col-4',
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
            block_type: 'array',
            classes: 'py-0 col-12',
            config: {
                field_id: 'substitutes_data',
                form_type: 'array',
                control_type: 'array',
                groups: [
                    {
                        form_type: 'group',
                        config: {
                            controls: [
                                {
                                    field_id: 'investor_name',
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
                                    field_id: 'investor_phone',
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
                                    field_id: 'investor_age',
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
            block_type: 'array',
            classes: '',
            config: {
                field_id: 'investors_data',
                form_type: 'array',
                control_type: 'array',
                groups: [
                    {
                        key: 0,
                        name: '0',
                        form_type: 'group',
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
        },
    ],
    action_config: {
        show_cancel: true,
        show_back: false,
        show_next: true,
        next_text: 'Finish'
    }
} 