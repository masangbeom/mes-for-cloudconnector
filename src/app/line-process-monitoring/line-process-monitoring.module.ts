import { HttpModule } from '@angular/http';
import { DataProvider } from './../../providers/data';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LineProcessMonitoringRoutingModule } from './line-process-monitoring-routing.module'
import { LineProcessMonitoringComponent } from './line-process-monitoring.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    LineProcessMonitoringRoutingModule,
    HttpModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule,
    TabsModule
  ],
  declarations: [ 
      LineProcessMonitoringComponent
   ],

    providers: [
        DataProvider,
  ],
})
export class LineProcessMonitoringModule { }
