import { InjectionToken } from "@angular/core";
import { DisableControlEffect } from "../effects/disable-control.effect";
import { EffectConfig } from "../interfaces/effect.interface";

export const EFFECT_CONFIG: EffectConfig = {
    disablecontrol: DisableControlEffect,
}

export const EFFECT_CONFIG_TOKEN = new InjectionToken<string>('EFFECT_CONFIG')