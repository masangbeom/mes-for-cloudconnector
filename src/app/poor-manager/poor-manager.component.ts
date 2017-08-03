import { DataProvider } from './../../providers/data';
import { Component,Input } from '@angular/core'
import { OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';
  
@Component({
  templateUrl: 'poor-manager.component.html',
})
export class PoorManagerComponent {
  private select_view: any = "background";
  private factories: any;
  private factory: any;
  private startDate: Date;
  private endDate: Date;
  private product: any;
  private line: any;
  private processes: any = [];
  private count: number = 0;
  private loadProgress: number = 80;
  private model: any;
  private changeLog: any;


  //Bar Chart
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  // Pie
  public pieChartLabels:string[];
  public pieChartData:number[];
  public pieChartType:string = 'pie';


  constructor(public dataProvider: DataProvider) {
    this.factories = this.dataProvider.sampleFactories();
  }

  onEndDateChange() {
    if (this.startDate > this.endDate) {
      this.endDate = null;
    }
    console.log(this.endDate);
  }

  onStartDateChange() {
    if (this.startDate > this.endDate) {
      this.endDate = null;
    }
    console.log(this.endDate);
  }

  onChange(factory) {
    this.factory = factory;
  }

  onLineChange(selectLine) {
    let temp: string = selectLine.trim();
    for (let i = 0; i < this.factory.lines.length; i++) {
      if (temp == this.factory.lines[i].name) {
        let line = {
          name: temp,
          lineId: this.factory.lines[i].lineId,
          processes: this.factory.lines[i].processes
        }
        this.line = line;
        this.line.processes.forEach(process => {
          process.poor = this.dataProvider.getProcessPoor(process);
          process.poorPercent = (Math.random()).toFixed(2);
        });
        
        console.log(this.line)
      }
    }
  }

  isEven(n) {
    return n % 2 == 0;
  }

  onProductChange(selectProduct) {
    let temp: string = selectProduct.trim();
    for (let i = 0; i < this.factory.products.length; i++) {
      if (temp == this.factory.products[i].name) {
        let product = {
          name: temp,
          stock_amount: this.factory.products[i].stock_amount,
          limit: this.factory.products[i].limit,
          p_factory: this.factory.products[i].p_factory,
          p_line: this.factory.products[i].p_line
        }
        this.product = product;
        this.product.productPoor = this.dataProvider.sampleProductPoor(this.product);
        console.log(this.product)
      }
    }

    this.pieChartLabels = ['외관불량', '치수불량','설비고장'];
    this.pieChartData = [Math.round(Math.random() * 10), Math.round(Math.random() * 10), Math.round(Math.random() * 10)];
  }

  public chartClicked(e:any):void {
    console.log(e);
    this.randomize();
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}
