import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

// provider
import { DataProvider } from '../providers/data';
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
        loadChildren: './line-process-monitoring/line-process-monitoring.module#LineProcessMonitoringModule'
      },
      {
        path: 'factory-environment',
        loadChildren: './factory-environment/factory-environment.module#FactoryEnvironmentModule'
      },
      {
        path: 'schedule-manager',
        loadChildren: './schedule-manager/schedule-manager.module#ScheduleManagerModule'
      },
      {
        path: 'stock-manager',
        loadChildren: './stock-manager/stock-manager.module#StockManagerModule'
      },
      {
        path: 'poor-manager',
        loadChildren: './poor-manager/poor-manager.module#PoorManagerModule'
      },
      {
        path: 'worker-manager',
        loadChildren: './worker-manager/worker-manager.module#WorkerManagerModule'
      },
      {
        path: 'manager-setting',
        loadChildren: './manager-setting/manager-setting.module#ManagerSettingModule'
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    DataProvider,
  ]
})
export class AppRoutingModule {}
