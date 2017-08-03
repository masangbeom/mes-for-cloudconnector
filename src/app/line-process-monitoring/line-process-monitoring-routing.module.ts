import { LineProcessMonitoringComponent } from './line-process-monitoring.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LineProcessMonitoringComponent,
    data: {
      title: '라인&공정 모니터링'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineProcessMonitoringRoutingModule {}
