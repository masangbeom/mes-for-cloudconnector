import { PoorManagerComponent } from './poor-manager.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PoorManagerComponent,
    data: {
      title: '품질 관리'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoorManagerRoutingModule {}
