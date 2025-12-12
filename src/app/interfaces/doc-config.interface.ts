export interface DocConfig {
    property: string,
    description: string,
    options: Option
}

interface Option {
    option: string,
    description: string,
}