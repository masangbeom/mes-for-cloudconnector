import { FactoryEnvironmentComponent } from './factory-environment.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: FactoryEnvironmentComponent,
    data: {
      title: '공장환경 관리'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactoryEnvironmentRoutingModule {}
