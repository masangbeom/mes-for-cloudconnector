import { ScheduleManagerRoutingModule } from './schedule-manager-routing.module';
import { ScheduleManagerComponent } from './schedule-manager.component';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [
    ScheduleManagerRoutingModule,
    ChartsModule
  ],
  declarations: [ 
      ScheduleManagerComponent,
   ]
})
export class ScheduleManagerModule { }
