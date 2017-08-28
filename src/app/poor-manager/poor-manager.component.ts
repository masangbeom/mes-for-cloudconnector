import { AngularFireDatabase } from 'angularfire2/database';
import { DataProvider } from './../../providers/data';
import { Component, OnInit } from '@angular/core'
import { OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import * as moment from 'moment';

@Component({
  templateUrl: 'poor-manager.component.html',
})
export class PoorManagerComponent implements OnInit{
  private select_view: any = "background";
  private factories: any;
  private factory: any;
  private lines: any;
  private startDate: Date;
  private endDate: Date;
  private product: any;
  private line: any;
  private processes: any;
  private count: number = 0;
  private loadProgress: number = 80;
  private model: any;
  private changeLog: any;
  private alert: any = false;
  private randomInterval: any;


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

  constructor(public dataProvider: DataProvider, public db: AngularFireDatabase) {
    this.db.list('factories').subscribe(factories=>{
      this.factories = factories;
    })
  }

  ngOnInit(){
  }

  
  ngDoCheck(){
    //Check endDate & startDate
    if(this.endDate != null && this.startDate != null && moment(this.endDate).isBefore(this.startDate)){
      this.alert = true;
      }else{
        this.alert=false;
      }
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
    this.factory.products = this.dataProvider.sampleProducts();
    this.db.list('factories/'+this.factory.factoryKey+'/lines/').subscribe(lines=>{
      this.lines = lines;
    })
  }

  onLineChange(line) {
    this.line = line;
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    this.db.list('factories/'+this.factory.factoryKey+'/lines/'+this.line.lineKey+'/processes').subscribe(processes=>{
      this.processes = processes;
      processes.forEach(process => {
        process.poor = this.dataProvider.getProcessPoor();
        count1 += process.poor.poor1_num;
        count2 += process.poor.poor2_num;
        count3 += process.poor.poor3_num;
        count4 += process.poor.ppm;
      });
    })
    this.line.poor_num1 = count1;
    this.line.poor_num2 = count2;
    this.line.poor_num3 = count3;
    this.line.ppm = count4;
    this.line.poor_per = (Math.round(Math.random() * 100)) + '%';

    // this.randomInterval = setInterval(() => {
    //   this.randomize();
    // }, 3000)
    this.pieChartLabels = ['외관불량', '치수불량','설비고장'];
    this.pieChartData = [this.line.poor_num1, this.line.poor_num2, this.line.poor_num3];
  }

  isEven(n) {
    return n % 2 == 0;
  }

  onProductChange(product) {
        this.product = product;
        this.product.productPoor = this.dataProvider.sampleProductPoor();
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
