import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { EFFECT_CONFIG, EFFECT_CONFIG_TOKEN, LAYOUT_EFFECT_CONFIG, LAYOUT_EFFECT_CONFIG_TOKEN } from './components/layout/config/effect.config';
import { CONTROL_CONFIG, CONTROL_CONFIG_TOKEN } from './components/layout/config/control.config';
import { VALIDATOR_CONFIG, VALIDATOR_CONFIG_TOKEN } from './components/layout/config/validator.config';
import { BLOCK_CONFIG, BLOCK_CONFIG_TOKEN } from './components/layout/config/block.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: Lara,
        options: {
          darkModeSelector: 'false'
        }
      }
    }),
    {
      provide: EFFECT_CONFIG_TOKEN,
      useValue: EFFECT_CONFIG
    },
    {
      provide: CONTROL_CONFIG_TOKEN,
      useValue: CONTROL_CONFIG
    },
    {
      provide: VALIDATOR_CONFIG_TOKEN,
      useValue: VALIDATOR_CONFIG
    },
    {
      provide: BLOCK_CONFIG_TOKEN,
      useValue: BLOCK_CONFIG
    },
    {
      provide: LAYOUT_EFFECT_CONFIG_TOKEN,
      useValue: LAYOUT_EFFECT_CONFIG
    },
  ]
};
