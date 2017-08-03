import { StockManagerRoutingModule } from './stock-manager-routing.module';
import { StockManagerComponent } from './stock-manager.component';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [
    StockManagerRoutingModule,
    ChartsModule
  ],
  declarations: [ 
      StockManagerComponent,
   ]
})
export class StockManagerModule { }
