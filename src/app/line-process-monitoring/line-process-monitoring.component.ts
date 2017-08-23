import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../../providers/data'
import { AngularFireDatabase } from 'angularfire2/database';
import * as moment from 'moment';

@Component({
  templateUrl: 'line-process-monitoring.component.html'
})

export class LineProcessMonitoringComponent implements OnInit{
  private factories: any;
  private factory: any;
  private line: any;
  private lines: any;
  private selectProcess: number = 0;
  private process: any;
  private processes: any;
  private check: number = 0;
  private select_view: any = "timely";
  private lineRunning: boolean = true;
  private tables: any = [];
  private count: number = 0;
  private machine: Array < any > ;
  private randomInterval: any;
  private ProcessRandomGenerate: any;

  public brandInfo = '#63c2de';
  public brandWarning = '#f8cb00';

  // lineChart
  public lineChartData: Array < any > = [{
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Series A'
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90],
      label: 'Series B'
    },
    {
      data: [18, 48, 77, 9, 100, 27, 40],
      label: 'Series C'
    }
  ];
  public lineChartLabels: Array < any > = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array < any > = [{ // grey
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
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  // lineChart5
  public lineChart5Data: Array < any > ;
  public lineChart5Labels: Array < any > = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
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
    elements: {
      point: {
        radius: 0
      }
    },
    legend: {
      display: false
    }
  };
  public lineChart5Info: Array < any > = [{
    backgroundColor: 'transparent',
    borderColor: this.brandInfo,
    borderWidth: 2
  }];
  public lineChart5Success: Array < any > = [{
    backgroundColor: 'transparent',
    borderColor: this.brandInfo,
    borderWidth: 2
  }];
  public lineChart5Warning: Array < any > = [{
    backgroundColor: 'transparent',
    borderColor: this.brandWarning,
    borderWidth: 2
  }];
  public lineChart5Legend = false;
  public lineChart5Type = 'line';

  //Bar Chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [{
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Series A'
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90],
      label: 'Series B'
    }
  ];

  // barChart1
  public barChart1Data: Array < any > ;
  public barChart1Labels: Array < any > = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
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
  public barChart1Colours: Array < any > = [{
    backgroundColor: 'rgba(255,255,255,.3)',
    borderWidth: 0
  }];
  public barChart1Legend = false;
  public barChart1Type = 'bar';

  // Pie
  public pieChartLabels: string[];

  public pieChartData: number[];
  public pieChartType: string = 'pie';

  constructor(public dataProvider: DataProvider, public db: AngularFireDatabase) {
    this.db.list('factories').subscribe(factories=>{
      this.factories = factories;
    })
  }

  ngOnInit(){
    //Factory & Line 시연용 미리 선택
  //   this.db.object('factories/'+"-KrnDUBL-Zwz5ERpbaB_").subscribe(factory=>{
  //     this.factory = factory;
  //   })
  // this.db.list('factories/'+"-KrnDUBL-Zwz5ERpbaB_"+'/lines/').subscribe(lines=>{
  //   this.lines = lines;
  // })
  // this.db.object('factories/'+"-KrnDUBL-Zwz5ERpbaB_"+'/lines/'+"-Kro-5OHW8Yy4G8uZIF4").subscribe(line=>{
  //   this.line = line;
  // })
  
  // let count = 0;
  // this.db.list('factories/'+"-KrnDUBL-Zwz5ERpbaB_"+'/lines/'+"-Kro-5OHW8Yy4G8uZIF4"+'/processes/', {
  //   query: {
  //     orderByChild: 'p_code',
  //     startAt: 1
  //   }
  // }).subscribe(processes=>{
  //   this.processes = processes;
  //   processes.forEach(process => {
  //     if (process.p_error) {
  //       count += 1;
  //     }
  //   });
  //   if (count == 0) {
  //     this.lineRunning = true;
  //   } else {
  //     this.lineRunning = false;
  //   }
  // })
  
  // this.randomInterval = setInterval(() => {
  //   this.randomize();
  // }, 5000)
  // this.process=null
  }

  onChange(factory) {
    this.factory = factory;
    this.db.list('factories/'+this.factory.factoryKey+'/lines/').subscribe(lines=>{
      this.lines = lines;
    })
  }

  onLineChange(line) {
    clearInterval(this.randomInterval);
    clearInterval(this.ProcessRandomGenerate);
    this.line = line;
    let count = 0;
    this.db.list('factories/'+this.factory.factoryKey+'/lines/'+this.line.lineKey+'/processes/', {
      query: {
        orderByChild: 'p_code',
        startAt: 1
      }
    }).subscribe(processes=>{
      console.log(processes)
      this.processes = processes;
      processes.forEach(process => {
        if (process.p_error) {
          count += 1;
        }
      });
      if (count == 0) {
        this.lineRunning = true;
      } else {
        this.lineRunning = false;
      }
    })
    
    this.randomInterval = setInterval(() => {
      this.randomize();
    }, 5000)
    this.process=null
  }

  isEven(n) {
    return n % 2 == 0;
  }
  isLineEnd(n) {
    return this.line.processes.length == n;
  }

  processClick(process) {
    clearInterval(this.randomInterval);
    clearInterval(this.ProcessRandomGenerate);
    let data = [{
      data: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)],
      label: 'Series A'
    }];
    this.lineChart5Data = data;
    let data2 = [{
      data: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)],
      label: '제품 이동 수'
    }];
    this.barChart1Data =data2;
    if (process == null) {
      this.process = "ENDLINE";
    } else {
      this.db.object('factories/'+this.factory.factoryKey+'/lines/'+this.line.lineKey+'/processes/'+process.processKey).subscribe((process)=>{
        this.process = process;
      })
    }
    this.pieChartLabels = ['외관불량', '치수불량', '설비고장'];
    this.pieChartData = [Math.round(Math.random() * 10), Math.round(Math.random() * 10), Math.round(Math.random() * 10)];
    this.machine = null;
    this.ProcessRandomGenerate = setInterval(()=>{
      this.db.object('factories/'+this.factory.factoryKey+'/lines/'+this.line.lineKey+'/processes/'+this.process.processKey).update({
        p_processing: Math.round(Math.random() * 10),
        p_complete: Math.round(Math.random() * 1000),
        poor_ppm: Math.round(Math.random() * 10),
        cycle_time: Math.round(Math.random() * 10),
        running_time: Math.round(moment.duration(Date.now() - process.createTime).asMinutes())
      })
    }, 3000)
    setTimeout(()=>{
      clearInterval(this.ProcessRandomGenerate)
    }, 15000)
    
  }

  processSelectStop() {
    this.process = null;
    clearInterval(this.randomInterval);
    clearInterval(this.ProcessRandomGenerate);
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    let _lineChartData: Array < any > = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {
        data: new Array(this.lineChartData[i].data.length),
        label: this.lineChartData[i].label
      };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40
    ];
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

  showMachine(machine) {
    this.machine = machine;

  }
  machineSelectStop() {
    this.machine = null;
  }
}
