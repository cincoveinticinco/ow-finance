import { InjectionToken } from "@angular/core";
import { DisableControlEffect } from "../effects/disable-control.effect";
import { EffectConfig } from "../interfaces/effect.interface";
import { ChangeListControlEffect } from "../effects/changelist-control.effect";

export const EFFECT_CONFIG: EffectConfig = {
    disablecontrol: DisableControlEffect,
    changelist: ChangeListControlEffect
}

export const EFFECT_CONFIG_TOKEN = new InjectionToken<string>('EFFECT_CONFIG');

export const LAYOUT_EFFECT_CONFIG: EffectConfig = {
    
};

export const LAYOUT_EFFECT_CONFIG_TOKEN = new InjectionToken<string>('LAYOUT_EFFECT_CONFIG');