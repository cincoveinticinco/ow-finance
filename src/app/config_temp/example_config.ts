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
                                name: 'complete_name',
                                type: 'input',
                                classes: 'w-3',
                                validators: [{
                                    validator_type: 'required',
                                }],
                                disabled: false,
                                config: {
                                    type: 'text',
                                    label: 'Test text',
                                    placeholder: 'Text'
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