import { DataProvider } from './../../providers/data';
import { PoorManagerRoutingModule } from './poor-manager-routing.module';
import { PoorManagerComponent } from './poor-manager.component';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

@NgModule({
  imports: [
    PoorManagerRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule,
    HttpModule,
    NgbModule,
    FormsModule, ReactiveFormsModule, JsonpModule,
  ],
  declarations: [ 
      PoorManagerComponent,
   ],
    providers: [
        DataProvider,
  ],
})
export class PoorManagerModule { }
