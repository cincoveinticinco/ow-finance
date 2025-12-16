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
                        }
                    ],
                    disabled: false,
                    config: {
                        controls: [
                            {
                                name: 'full_name',
                                type: 'input',
                                classes: 'w-3',
                                validators: [{
                                    validator_type: 'required',
                                }],
                                disabled: false,
                                config: {
                                    type: 'text',
                                    label: 'Test text',
                                    placeholder: 'Text',
                                    helpText: 'This is a test field'
                                },
                                config_messages: {
                                    'required': 'This field is required'
                                },
                                value: 'Test'
                            }
                        ]
                    }
                },
            }
            
        }
    ]
} 