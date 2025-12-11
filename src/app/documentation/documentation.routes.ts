import { Routes } from '@angular/router';

export const DocumentationRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./documentation').then(c => c.Documentation),
        children: [
            {
                path: 'text-input',
                loadComponent: () => import('./components/text-input-doc/text-input-doc').then(c => c.TextInputDoc)
            },
            {
                path: 'textarea',
                loadComponent: () => import('./components/textarea-doc/textarea-doc').then(c => c.TextareaDoc)
            },
            {
                path: 'mail-input',
                loadComponent: () => import('./components/mail-input-doc/mail-input-doc').then(c => c.MailInputDoc)
            },
            {
                path: 'select-input',
                loadComponent: () => import('./components/select-input-doc/select-input-doc').then(c => c.SelectInputDoc)
            },
            {
                path: 'date-input',
                loadComponent: () => import('./components/date-input-doc/date-input-doc').then(c => c.DateInputDoc)
            },
            {
                path: 'number-input',
                loadComponent: () => import('./components/number-input-doc/number-input-doc').then(c => c.NumberInputDoc)
            },
            {
                path: 'address-input',
                loadComponent: () => import('./components/address-input-doc/address-input-doc').then(c => c.AddressInputDoc)
            },
            {
                path: 'phone-input',
                loadComponent: () => import('./components/phone-input-doc/phone-input-doc').then(c => c.PhoneInputDoc)
            },
            {
                path: 'file-input',
                loadComponent: () => import('./components/file-input-doc/file-input-doc').then(c => c.FileInputDoc)
            },
            {
                path: 'radio-input',
                loadComponent: () => import('./components/radio-input-doc/radio-input-doc').then(c => c.RadioInputDoc)
            },
            {
                path: 'check-input',
                loadComponent: () => import('./components/check-input-doc/check-input-doc').then(c => c.CheckInputDoc)
            },
            {
                path: 'signature-input',
                loadComponent: () => import('./components/signature-input-doc/signature-input-doc').then(c => c.SignatureInputDoc)
            },
            {
                path: 'payment-input',
                loadComponent: () => import('./components/payment-input-doc/payment-input-doc').then(c => c.PaymentInputDoc)
            },
            {
                path: '**',
                redirectTo: 'text-input'
            }
        ]
    }
];
