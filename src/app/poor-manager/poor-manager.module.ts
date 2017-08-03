import { PoorManagerRoutingModule } from './poor-manager-routing.module';
import { PoorManagerComponent } from './poor-manager.component';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [
    PoorManagerRoutingModule,
    ChartsModule
  ],
  declarations: [ 
      PoorManagerComponent,
   ]
})
export class PoorManagerModule { }
