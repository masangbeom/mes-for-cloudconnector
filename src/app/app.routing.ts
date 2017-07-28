import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'MES'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'line-process-monitoring',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'schedule-manager',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'poor-manager',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'stock-manager',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'worker-manager',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'factory-environment-manager',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'setting',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
