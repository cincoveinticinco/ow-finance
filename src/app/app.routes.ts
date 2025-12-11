import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'docs',
        loadChildren: () => import('./documentation/documentation.routes').then(r => r.DocumentationRoutes)
        // loadComponent: () => import('./documentation/documentation').then(r => r.Documentation)
    },
    {
        path: '**',
        redirectTo: 'docs'
    }
];
