import { ScheduleManagerComponent } from './schedule-manager.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ScheduleManagerComponent,
    data: {
      title: '일정 관리'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleManagerRoutingModule {}
