import { DataProvider } from './../../providers/data';
import { Component} from '@angular/core';

@Component({
  templateUrl: 'factory-environment.component.html'
})
export class FactoryEnvironmentComponent {
  private factories: any;
  private factory: any;
  private product_wares: any;
  private factory_ware: Array<string> = [];
  private factory_products: Array<string> = ['자재1', '자재2', '자재3', '자재4', '자재5', '자재6'];
  
  constructor(public dataProvider: DataProvider) { 
    this.factories = this.dataProvider.sampleFactories();
    this.onChange(this.factories[0])
  }
  onChange(factory){
    this.factory = factory;
    this.product_wares = this.factory.wares;
    for(let i=0; i<this.product_wares.length; i++){
      this.product_wares[i].name = (i+1) + '번 창고'; 
    }
    this.factory.danger_percentage = Math.round(Math.random() * 100 + 1);
    this.factory.celsius = Math.round(Math.random() * 40 + 20);
    this.factory.humid = Math.round(Math.random() * 100 + 1);
    this.factory.decibel = Math.round(Math.random() * 1000 + 1);
    this.factory.dust = Math.round(Math.random() * 100 + 1);
  }
  
      
}

