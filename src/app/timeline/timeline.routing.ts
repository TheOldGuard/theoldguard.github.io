import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { TimelineComponent } from './timeline.component';

const routes = [
    {
        path: 'timeline',
        component: TimelineComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
