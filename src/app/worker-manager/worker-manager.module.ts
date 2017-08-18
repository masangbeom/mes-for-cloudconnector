import { AngularFireDatabaseModule } from 'angularfire2/database';
import { WorkerManagerRoutingModule } from './worker-manager-routing.module';
import { WorkerManagerComponent } from './worker-manager.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataProvider } from './../../providers/data';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    WorkerManagerRoutingModule,
    BsDropdownModule,
    CommonModule,
    AngularFireDatabaseModule,
    HttpModule,
  ],
  declarations: [ 
      WorkerManagerComponent,
   ],
  providers: [
        DataProvider,
  ],
})
export class WorkerManagerModule { }
