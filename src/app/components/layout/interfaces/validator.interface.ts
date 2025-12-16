import { ValidatorFn } from "@angular/forms";

export type ValidatorParam = number | string | number[] | string[] | RegExp;

export interface IValidator {
    validator_type?: string;
    params?: ValidatorParam[];
}

export interface IValidatorFcn {
    (params: ValidatorParam[]): ValidatorFn;
}

export type ValidatorConfig = {[key: string]: IValidatorFcn};