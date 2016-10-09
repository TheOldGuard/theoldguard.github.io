import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar.component';

const calendarRoutes = [
    {
        path: 'calendar',
        redirectTo: '/calendar/26908',
        pathMatch: 'full'
    },
    {
        path: 'calendar/:offset',
        component: CalendarComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(calendarRoutes);
