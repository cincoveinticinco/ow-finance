import { Validators } from "@angular/forms";
import { ValidatorConfig, ValidatorParam } from "../interfaces/validator.interface";
import { InjectionToken } from "@angular/core";

export const VALIDATOR_CONFIG: ValidatorConfig = {
    min: (params: ValidatorParam[]) => Validators.min(params[0] as number),
    max: (params: ValidatorParam[]) => Validators.min(params[0] as number),
    required: (params: ValidatorParam[]) => Validators.required,
}

export const VALIDATOR_CONFIG_TOKEN = new InjectionToken<string>('VALIDATOR_CONFIG');