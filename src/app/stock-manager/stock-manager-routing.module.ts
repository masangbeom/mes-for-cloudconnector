import { StockManagerComponent } from './stock-manager.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: StockManagerComponent,
    data: {
      title: '재고 관리'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockManagerRoutingModule {}
