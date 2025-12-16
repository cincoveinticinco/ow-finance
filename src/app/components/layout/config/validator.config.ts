import { Validators } from "@angular/forms";
import { ValidatorConfig, ValidatorParam } from "../interfaces/validator.interface";
import { InjectionToken } from "@angular/core";

export const VALIDATOR_CONFIG: ValidatorConfig = {
    min: (params: ValidatorParam[]) => Validators.min(params[0] as number),
    max: (params: ValidatorParam[]) => Validators.max(params[0] as number),
    required: (params: ValidatorParam[]) => Validators.required,
    requiredTrue: (params: ValidatorParam[]) => Validators.requiredTrue,
    email: (params: ValidatorParam[]) => Validators.email,
    minlength: (params: ValidatorParam[]) => Validators.minLength(params[0] as number),
    maxlength: (params: ValidatorParam[]) => Validators.maxLength(params[0] as number),
    pattern: (params: ValidatorParam[]) => Validators.pattern(params[0] as (string | RegExp)),
}

export const VALIDATOR_CONFIG_TOKEN = new InjectionToken<string>('VALIDATOR_CONFIG');