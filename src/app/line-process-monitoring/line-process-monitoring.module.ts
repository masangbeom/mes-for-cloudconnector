import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { LineProcessMonitoringRoutingModule } from './line-process-monitoring-routing.module'
import { LineProcessMonitoringComponent } from './line-process-monitoring.component';

@NgModule({
  imports: [
    LineProcessMonitoringRoutingModule,
    ChartsModule
  ],
  declarations: [ 
      LineProcessMonitoringComponent
   ]
})
export class LineProcessMonitoringModule { }
