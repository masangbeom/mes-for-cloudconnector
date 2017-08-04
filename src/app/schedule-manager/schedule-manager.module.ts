import { ScheduleManagerRoutingModule } from './schedule-manager-routing.module';
import { ScheduleManagerComponent } from './schedule-manager.component';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DayPilotModule } from "daypilot-pro-angular";
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    ScheduleManagerRoutingModule,
    ChartsModule,
    FormsModule,
    DayPilotModule,
    CommonModule,
    HttpModule,
    BsDropdownModule,
    ModalModule,
  ],
  declarations: [ 
      ScheduleManagerComponent,
   ]
})
export class ScheduleManagerModule { }
