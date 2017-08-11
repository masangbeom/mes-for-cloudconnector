import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { AngularFireModule } from 'angularfire2';
import { DataProvider } from './../../providers/data';
import { ManagerSettingRoutingModule } from './manager-setting-routing.module';
import { ManagerSettingComponent } from './manager-setting.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ManagerSettingRoutingModule,
    BsDropdownModule,
    CommonModule,
    FormsModule, ReactiveFormsModule,
    AngularFireDatabaseModule,
    // AngularFireDatabase,
  ],
  declarations: [ 
      ManagerSettingComponent,
   ],

   providers: [
     DataProvider
   ]
})
export class ManagerSettingModule { }
