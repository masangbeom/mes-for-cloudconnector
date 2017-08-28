import { Component } from '@angular/core';
import { DataProvider } from './../../providers/data';

@Component({
  templateUrl: 'stock-manager.component.html'
})
export class StockManagerComponent {

  constructor(public dataProvider: DataProvider) { 
    this.warehouses = this.dataProvider.sampleWareHouse();
    console.log(this.warehouses)
    this.onChange(this.warehouses[0]);
  }

  private select_view: any = "daily";

  public chartType1: string = 'bar';
  public chartType2: string = 'line';
  
  private warehouses: any;
  private selectOn: any;
  private selectProduct: number = 0;
  private warehouse: any;
  // private products: any;
  private product: any;
  private leakProducts: any;
  public isDataAvailable:boolean = false;
  public barChartOptions: any;
  public barChartLabels: any;
  public barChartColors: Array <any> = [{
    backgroundColor: [],
    borderColor: [],
  }];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;
  public barChartData: any[] = [{
    data: [0,0,0,0,0,0,0],
    label: '재고량',
  },
  {
    data: [0,0,0,0,0,0,0],
    label: '필요량',
    backgroundColor: 'rgba(0, 0, 0, 0.01)',
    borderColor: 'rgba(0, 0, 0, 0.5)',
    type: 'line',
  }
  ];


  // lineChart
  public lineChartData: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  public lineChartColours: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  //창고 선택
  onChange(warehouse) {

    this.warehouse = warehouse;

    let dataTemp = [];
    let limitTemp = [];
    let labelTemp = [];
    let colorTemp1 = [];
    let colorTemp2 = [];
    let leakTemp = [];
  
    for (let i = 0; i < this.warehouse.products.length; i++) {
      dataTemp.push(this.warehouse.products[i].stock_amount);
      limitTemp.push(this.warehouse.products[i].limit);
      labelTemp.push(this.warehouse.products[i].name);
      if(this.warehouse.products[i].limit > this.warehouse.products[i].stock_amount){
        colorTemp1.push('rgba(241, 0, 0, 0.5)');
        colorTemp2.push('rgba(241, 0, 0, 1)');
        leakTemp.push({
          leakProductName: this.warehouse.products[i].name,
          leakNumber: this.warehouse.products[i].limit - this.warehouse.products[i].stock_amount
        })
        this.warehouse.products[i].isLeak = true;
      }
      else{
        colorTemp1.push('rgba(54, 162, 235, 0.5)');
        colorTemp2.push('rgba(54, 162, 235, 1)');
        this.warehouse.products[i].isLeak = false;
      }
    }

    this.leakProducts = leakTemp;
    //console.log(this.leakProducts);


    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = dataTemp;
    clone[1].data = limitTemp;
  
    this.barChartData = clone;
    this.barChartLabels = labelTemp;
    this.barChartOptions = {
      scaleShowVerticalLines: true,
      responsive: true,
      title: {
        display: true,
        text: this.warehouse.title + '의 물품별 재고량'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontStyle: "bold"
          }
        }],
      }
    };
    this.barChartColors[0].backgroundColor=colorTemp1;
    this.barChartColors[0].borderColor=colorTemp2;

  }

  //물품 선택
  public chartClicked(e: any): void {
    this.selectProduct = 1;
    if(e.active[0]){
    this.product = e.active[0]._model.label;
    let productName = e.active[0]._model.label;
    for (let i = 0; i < this.warehouse.products.length; i++) {
      if (this.warehouse.products[i].name == productName) {
        this.product = this.warehouse.products[i];
      }
    }
    
    }
    this.randomize1();
    // this.lineChartData[0].data = this.barChartData[0].data;
    // this.lineChartLabels = this.barChartLabels;
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize1():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.lineChartData));
    clone[0].data = data;
    this.lineChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }


}
