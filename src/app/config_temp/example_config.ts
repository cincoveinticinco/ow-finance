import { ILayout } from "../components/layout/interfaces/layout.interface";

export const ExampleLayout: ILayout = {
    title: 'Example layout',
    blocks: [
        {
            key: 'textinput',
            block_type: 'form',
            classes: '',
            config: {
                control: {
                    name: 'textinput-form',
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
                                    label: 'Full name',
                                    placeholder: 'Placeholder',
                                },
                                config_messages: {
                                    required: 'This field is required',
                                    maxlength: 'Not must up to 10',
                                    minlength: 'Not must less to 2',
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
                                    helpText: 'This is a test field'
                                },
                                config_messages: {
                                    required: 'Your age',
                                    min: 'You must have a legal age',
                                    max: "You must not up to 100 age"
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
                                    maxlength: 'Not must up to 10',
                                    minlength: 'Not must less to 2',
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
            
        }
    ]
} 