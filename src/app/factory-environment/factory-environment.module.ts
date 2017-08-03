import { FactoryEnvironmentComponent } from './factory-environment.component';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FactoryEnvironmentRoutingModule } from './factory-environment-routing.module'

@NgModule({
  imports: [
    FactoryEnvironmentRoutingModule,
    ChartsModule
  ],
  declarations: [ 
      FactoryEnvironmentComponent,
   ]
})
export class FactoryEnvironmentModule { }
