import { GoogleChartComponent } from './google-chart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: GoogleChartComponent,
    data: {
      title: '구글 차트 테스트'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleChartRoutingModule {}
