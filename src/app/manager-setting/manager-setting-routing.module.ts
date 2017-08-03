import { ManagerSettingComponent } from './manager-setting.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ManagerSettingComponent,
    data: {
      title: '관리자 설정'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerSettingRoutingModule {}
