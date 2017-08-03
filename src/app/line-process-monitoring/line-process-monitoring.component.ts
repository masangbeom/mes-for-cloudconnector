// import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data'

// @Component({
//   templateUrl: 'line-process-monitoring.component.html'
// })
// export class LineProcessMonitoringComponent {

//   private factories: any;
//   private selectOn: string = "";
//   private factory: any;
//   private line: any;
//   private selectLine: string = "";
//   private selectProcess: number = 0;
//   private process: any;
//   private check: number = 0;
//   private select_view: any = "timely";
//   private lineRunning: boolean = true;
//   private tables: any = [];
//   private count: number = 0;
//   private machine:Array<any>;
  

//   // lineChart
//   public lineChartData:Array<any> = [
//     {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
//     {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
//     {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
//   ];
//   public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//   public lineChartOptions:any = {
//     responsive: true
//   };
//   public lineChartColors:Array<any> = [
//     { // grey
//       backgroundColor: 'rgba(148,159,177,0.2)',
//       borderColor: 'rgba(148,159,177,1)',
//       pointBackgroundColor: 'rgba(148,159,177,1)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(148,159,177,0.8)'
//     },
//     { // dark grey
//       backgroundColor: 'rgba(77,83,96,0.2)',
//       borderColor: 'rgba(77,83,96,1)',
//       pointBackgroundColor: 'rgba(77,83,96,1)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(77,83,96,1)'
//     },
//     { // grey
//       backgroundColor: 'rgba(148,159,177,0.2)',
//       borderColor: 'rgba(148,159,177,1)',
//       pointBackgroundColor: 'rgba(148,159,177,1)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(148,159,177,0.8)'
//     }
//   ];
//   public lineChartLegend:boolean = true;
//   public lineChartType:string = 'line';

//   //Bar Chart
//   public barChartOptions:any = {
//     scaleShowVerticalLines: false,
//     responsive: true
//   };
//   public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
//   public barChartType:string = 'bar';
//   public barChartLegend:boolean = true;
 
//   public barChartData:any[] = [
//     {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
//     {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
//   ];

//   // Pie
//   public pieChartLabels:string[];
//   public pieChartData:number[];
//   public pieChartType:string = 'pie';

//   constructor(public dataProvider: DataProvider) {}

//   ionViewDidLoad() {
//     this.factories = this.dataProvider.sampleFactories();
//    // this.dataProvider.createLinesData();
//     //this.dataProvider.createFactoriesData();
//     console.log('ionViewDidLoad FactoryMonitoringPage');
//   }

//   onChange(selectOn) {
//     this.check = 0;
//     this.selectLine = ''; 
//     let temp: string = selectOn.trim();
//     console.log(temp);
//     for (let i = 0; i < this.factories.length; i++) {
//       if (temp == this.factories[i].title) {
//         let factory = {
//           title: temp,
//           description: this.factories[i].description,
//           lines: this.factories[i].lines
//         }
//         this.factory = factory
//         console.log(this.factory)
//       }
//     }
//   }

//   onLineChange(selectLine) {
//     this.selectLine = selectLine;
//     this.check = 1;
//     console.log(this.selectLine);
//     let temp: string = selectLine.trim();
//     for (let i = 0; i < this.factory.lines.length; i++) {
//       if (temp == this.factory.lines[i].name) {
//         let line = {
//           name: temp,
//           lineId: this.factory.lines[i].lineId,
//           processes: this.factory.lines[i].processes
//         }
//         this.line = line;
//         let count = 0;
//         this.line.processes.forEach(process => {
//           if(process.p_error){
//             count += 1;
//           }
//           process.poor = this.dataProvider.getProcessPoor(process);
//           console.log(process);
//         });
//         console.log(count);
//         if(count == 0){
//           this.lineRunning = true;
//         }else{
//           this.lineRunning = false;
//         }
//         console.log(this.line)
//       }
//     }
//     this.processSelectStop();
//   }

//   isEven(n) {
//     return n % 2 == 0;
//   }
//   isLineEnd(n){
//     return this.line.processes.length == n;
//   }

//   processClick(process){
//     if(process==null){
//       this.process = "END LINE";
//     }else{
//     let _process = {
//         p_code: process.p_code,
//         p_name: process.p_name,
//         description: process.description,
//         pro_code: process.pro_code,
//         p_error: process.p_error,
//         l_code: process.l_code,
//         p_processing: Math.round(Math.random() * 100),
//         p_complete: Math.round(Math.random() * 100),
//         poor: process.poor,
//         machines: this.dataProvider.getProcessMachine(process)
//       }
//       this.process = _process;
//       console.log(this.process);
//     }
//     this.pieChartLabels = ['외관불량', '치수불량','설비고장'];
//     this.pieChartData = [Math.round(Math.random() * 10), Math.round(Math.random() * 10), Math.round(Math.random() * 10)];
//     this.machine = null;
//   }

//   processSelectStop(){
//     this.process = null;
//   }

//   public chartClicked(e:any):void {
//     console.log(e);
//     this.randomize();
//   }
 
//   public chartHovered(e:any):void {
//     console.log(e);
//   }
 
//   public randomize():void {
//     let _lineChartData:Array<any> = new Array(this.lineChartData.length);
//     for (let i = 0; i < this.lineChartData.length; i++) {
//       _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
//       for (let j = 0; j < this.lineChartData[i].data.length; j++) {
//         _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
//       }
//     }
//     this.lineChartData = _lineChartData;
//     // Only Change 3 values
//     let data = [
//       Math.round(Math.random() * 100),
//       59,
//       80,
//       (Math.random() * 100),
//       56,
//       (Math.random() * 100),
//       40];
//     let clone = JSON.parse(JSON.stringify(this.barChartData));
//     clone[0].data = data;
//     this.barChartData = clone;
//     /**
//      * (My guess), for Angular to recognize the change in the dataset
//      * it has to change the dataset variable directly,
//      * so one way around it, is to clone the data, change it and then
//      * assign it;
//      */
//   }

//   showMachine(machine){
//     this.machine = machine;

//   }
//   machineSelectStop(){
//     this.machine = null;
//   }
// }

import { Component } from '@angular/core';




@Component({
  templateUrl: 'line-process-monitoring.component.html'
})
export class LineProcessMonitoringComponent {

  constructor() { }

  public brandPrimary = '#20a8d8';
  public brandSuccess = '#4dbd74';
  public brandInfo = '#63c2de';
  public brandWarning = '#f8cb00';
  public brandDanger = '#f86c6b';

  // convert Hex to RGBA
  // public convertHex(hex: string, opacity: number){
  //   hex = hex.replace('#','');
  //   let r = parseInt(hex.substring(0,2), 16);
  //   let g = parseInt(hex.substring(2,4), 16);
  //   let b = parseInt(hex.substring(4,6), 16);
  //
  //   let rgba = 'rgba('+r+','+g+','+b+','+opacity/100+')';
  //   return rgba;
  // }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  // lineChart1
  public lineChart1Data: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Series A'
    }
  ];
  public lineChart1Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart1Options: any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 40 - 5,
          max: 84 + 5,
        }
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart1Colours: Array<any> = [
    { // grey
      backgroundColor: this.brandPrimary,
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart1Legend = false;
  public lineChart1Type = 'line';

  // lineChart2
  public lineChart2Data: Array<any> = [
    {
      data: [1, 18, 9, 17, 34, 22, 11],
      label: 'Series A'
    }
  ];
  public lineChart2Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart2Options: any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 1 - 5,
          max: 34 + 5,
        }
      }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart2Colours: Array<any> = [
    { // grey
      backgroundColor: this.brandInfo,
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart2Legend = false;
  public lineChart2Type = 'line';


  // lineChart3
  public lineChart3Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'Series A'
    }
  ];
  public lineChart3Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart3Options: any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart3Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
    }
  ];
  public lineChart3Legend = false;
  public lineChart3Type = 'line';


  // barChart1
  public barChart1Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
      label: 'Series A'
    }
  ];
  public barChart1Labels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
  public barChart1Options: any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.6,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart1Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }
  ];
  public barChart1Legend = false;
  public barChart1Type = 'bar';

  // lineChart4
  public lineChart4Data: Array<any> = [
    {
      data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
      label: 'Series A'
    }
  ];
  public lineChart4Labels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public lineChart4Options: any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        points: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: { point: { radius: 0 } },
    legend: {
      display: false
    }
  };
  public lineChart4Colours: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: 'rgba(255,255,255,.55)',
      borderWidth: 2
    }
  ];
  public lineChart4Legend = false;
  public lineChart4Type = 'line';


  // barChart2
  public barChart2Data: Array<any> = [
    {
      data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
      label: 'Series A'
    }
  ];
  public barChart2Labels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public barChart2Options: any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.6,
      }],
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
        }
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart2Colours: Array<any> = [
    {
      backgroundColor: 'rgba(0,0,0,.2)',
      borderWidth: 0
    }
  ];
  public barChart2Legend = false;
  public barChart2Type = 'bar';


  // barChart3
  public barChart3Data: Array<any> = [
    {
      data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
      label: 'Series A'
    }
  ];
  public barChart3Labels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public barChart3Options: any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart3Primary: Array<any> = [
    {
      backgroundColor: this.brandPrimary,
      borderColor: 'transparent',
      borderWidth: 1
    }
  ];
  public barChart3Danger: Array<any> = [
    {
      backgroundColor: this.brandDanger,
      borderColor: 'transparent',
      borderWidth: 1
    }
  ];
  public barChart3Success: Array<any> = [
    {
      backgroundColor: this.brandSuccess,
      borderColor: 'transparent',
      borderWidth: 1
    }
  ];
  public barChart3Legend = false;
  public barChart3Type = 'bar';


  // lineChart5
  public lineChart5Data: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Series A'
    }
  ];
  public lineChart5Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart5Options: any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        points: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: { point: { radius: 0 } },
    legend: {
      display: false
    }
  };
  public lineChart5Info: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: this.brandInfo,
      borderWidth: 2
    }
  ];
  public lineChart5Success: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: this.brandInfo,
      borderWidth: 2
    }
  ];
  public lineChart5Warning: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: this.brandWarning,
      borderWidth: 2
    }
  ];
  public lineChart5Legend = false;
  public lineChart5Type = 'line';

}

