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
import { TreeviewModule } from 'ngx-treeview';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    ManagerSettingRoutingModule,
    TreeviewModule.forRoot(),
    BsDropdownModule,
    CommonModule,
    ModalModule.forRoot(),
    FormsModule, ReactiveFormsModule,
    AngularFireDatabaseModule,
    TabsModule,
    JsonpModule,
    NgbModule
  ],
  declarations: [ 
      ManagerSettingComponent,
   ],

   providers: [
     DataProvider
   ]
})
export class ManagerSettingModule { }
