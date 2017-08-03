import { WorkerManagerRoutingModule } from './worker-manager-routing.module';
import { WorkerManagerComponent } from './worker-manager.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    WorkerManagerRoutingModule,
  ],
  declarations: [ 
      WorkerManagerComponent,
   ]
})
export class WorkerManagerModule { }
