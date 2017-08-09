import { FactoryEnvironmentComponent } from './factory-environment.component';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FactoryEnvironmentRoutingModule } from './factory-environment-routing.module'
import { CommonModule } from '@angular/common';
import { DataProvider } from './../../providers/data';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpModule } from '@angular/http';
import { DndModule } from 'ng2-dnd';
// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    FactoryEnvironmentRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule,
    DndModule.forRoot(),
    HttpModule,
    TabsModule,
  ],
  declarations: [ 
      FactoryEnvironmentComponent,
   ],
  providers: [
        DataProvider,
  ],
})
export class FactoryEnvironmentModule { }
