import { ILayout } from "../components/layout/interfaces/layout.interface";

export const ExampleLayout: ILayout = {
    title: 'Registro proveedores nacionales',
    blocks: [
        {
            key: 'provider_data',
            block_type: 'section',
            classes: '',
            config: {
                field_id: 'provider_data',
                form_type: 'group',
                fields: [
                    {
                        key: 'main_text',
                        control_type: 'text',
                        classes: 'text-md px-2 mb-5 mt-0 text-gray-600',
                        config: {
                            value: 'Lrem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                        }
                    },
                    {
                        control_type: 'title',
                        classes: 'text-lg col-12',
                        config: {
                            value: 'Provider data',
                            has_separator: true
                        }
                    },
                    {
                        field_id: 'personal_type',
                        control_type: 'input',
                        classes: 'md:col-2 sm:col-12',
                        validators: [
                            {
                                validator_type: 'required',
                            }
                        ],
                        disabled: false,
                        config: {
                            label: 'Provider type',
                        },
                        value: null
                    },
                    {
                        field_id: 'document_type',
                        control_type: 'input',
                        classes: 'md:col-2 sm:col-12',
                        validators: [
                            {
                                validator_type: 'required',
                            }
                        ],
                        disabled: false,
                        config: {
                            label: 'Document type'
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
            key: 'economic_activity_data',
            block_type: 'section',
            classes: '',
            config: {
                field_id: 'economic_activity_data',
                form_type: 'group',
                fields: [
                    {
                        control_type: 'title',
                        classes: 'text-lg col-12',
                        config: {
                            value: 'Economic activity',
                            has_separator: true
                        }
                    },
                    {
                        field_id: 'provider_clasification',
                        control_type: 'input',
                        classes: 'md:col-4 sm:col-12',
                        validators: [
                            {
                                validator_type: 'required',
                            }
                        ],
                        disabled: false,
                        config: {
                            label: 'Provider clasification',
                        },
                        value: null
                    },
                    {
                        field_id: 'provider_type',
                        control_type: 'input',
                        classes: 'md:col-4 sm:col-12',
                        validators: [
                            {
                                validator_type: 'required',
                            }
                        ],
                        disabled: false,
                        config: {
                            label: 'Provider type'
                        },
                        value: null
                    },
                    {
                        field_id: 'tax_system',
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
                            label: 'Tax system',
                        },
                        value: null
                    },
                    {
                        field_id: 'mainly_comercial_activity',
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
                            label: 'Mainly comercial activity',
                        },
                        value: null
                    },
                    {
                        field_id: 'other_comercial_activity',
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
                            label: 'Other comercial activity',
                        },
                        value: null
                    },
                ]
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