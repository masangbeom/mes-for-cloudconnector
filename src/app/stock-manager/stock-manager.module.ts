import { StockManagerRoutingModule } from './stock-manager-routing.module';
import { StockManagerComponent } from './stock-manager.component';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { HttpModule } from '@angular/http';
import { DataProvider } from './../../providers/data';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  imports: [
    StockManagerRoutingModule,
    HttpModule,
    CommonModule,
    AlertModule.forRoot(),
    BsDropdownModule,
    ChartsModule
  ],
  declarations: [ 
      StockManagerComponent,
      
   ],
  providers: [
        DataProvider,
  ],
})
export class StockManagerModule { }
