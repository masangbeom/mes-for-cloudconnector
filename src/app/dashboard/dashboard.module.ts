import { HttpModule } from '@angular/http';
import { DataProvider } from './../../providers/data';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    HttpModule,
    BsDropdownModule,
    ModalModule.forRoot(),
    CommonModule,
    TabsModule
  ],
  declarations: [ DashboardComponent ],
   providers: [
        DataProvider,
  ],
})
export class DashboardModule { }
