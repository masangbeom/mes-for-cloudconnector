import { WorkerManagerComponent } from './worker-manager.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: WorkerManagerComponent,
    data: {
      title: '인적자원 관리'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkerManagerRoutingModule {}
