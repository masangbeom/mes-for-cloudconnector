import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data'
import { DayPilot, DayPilotGanttComponent } from "daypilot-pro-angular";

@Component({
  templateUrl: 'schedule-manager.component.html'
})
export class ScheduleManagerComponent {

  config: any = {
    startDate: "2017-01-01",
    days: new DayPilot.Date().daysInMonth(),
    cellWidthSpec: "Auto",
    tasks: [
      {start: "2014-01-05", end: "2017-01-07", id: 1, text: "물품1 생산", complete: 40},
      {start: "2017-01-06", end: "2017-01-14", id: 2, text: "물품2 생산", complete: 100},
      {start: "2017-01-07", end: "2017-01-23", id: 3, text: "물품3 생산", complete: 30},
      {start: "2017-01-08", end: "2017-01-22", id: 4, text: "물품4 생산", complete: 60},
      {start: "2017-01-09", end: "2017-01-21", id: 5, text: "물품5 생산", complete: 50},
      {start: "2017-01-10", end: "2017-01-20", id: 6, text: "물품6 생산", complete: 100},
      {start: "2014-01-05", end: "2017-01-07", id: 7, text: "물품7 생산", complete: 70},
      {start: "2017-01-06", end: "2017-01-14", id: 8, text: "물품8 생산", complete: 80},
      {start: "2017-01-07", end: "2017-01-23", id: 9, text: "물품9 생산", complete: 90},
      {start: "2017-01-08", end: "2017-01-22", id: 10, text: "물품10 생산", complete: 100},
    ]
    
  };
  private tempTasks:any = [
      {start: "2014-01-05", end: "2017-01-07", id: 1, text: "물품1 생산", complete: 40},
      {start: "2017-01-06", end: "2017-01-14", id: 2, text: "물품2 생산", complete: 100},
      {start: "2017-01-07", end: "2017-01-23", id: 3, text: "물품3 생산", complete: 30},
      {start: "2017-01-08", end: "2017-01-22", id: 4, text: "물품4 생산", complete: 60},
      {start: "2017-01-09", end: "2017-01-21", id: 5, text: "물품5 생산", complete: 50},
      {start: "2017-01-10", end: "2017-01-20", id: 6, text: "물품6 생산", complete: 100},
      {start: "2014-01-05", end: "2017-01-07", id: 7, text: "물품7 생산", complete: 70},
      {start: "2017-01-06", end: "2017-01-14", id: 8, text: "물품8 생산", complete: 80},
      {start: "2017-01-07", end: "2017-01-23", id: 9, text: "물품9 생산", complete: 90},
      {start: "2017-01-08", end: "2017-01-22", id: 10, text: "물품10 생산", complete: 100},
    ];
  private randomInterval: any;
  private factories: any;
  private selectOn: string = "";
  private factory: any;
  private selectLine: string = "";
  private line: any;
  private loadProgress: number = 80;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['17.08.01', '17.08.02', '17.08.03', '17.08.04', '17.08.05', '17.08.06', '17.08.07'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  constructor(public dataProvider: DataProvider) {
     for(let i=0; i<this.tempTasks.length; i++){  
        this.tempTasks[i] = {
          start: this.tempTasks[i].start,
          end: this.tempTasks[i].end,
          id: this.tempTasks[i].id,
          text: this.tempTasks[i].text,
          complete: this.tempTasks[i].complete,
          width: this.tempTasks[i].complete + '%'
        }
     }
      for(let i=0; i<this.config.tasks.length; i++){  
    if(this.config.tasks[i].complete == 100){
      this.config.tasks[i].complete += "<strong> (완료)</strong>"
    }
    this.config.tasks[i].text += " (" + this.config.tasks[i].start;
    this.config.tasks[i].text += " ~ ";
    this.config.tasks[i].text += this.config.tasks[i].end+ ") ";
    }

    this.factories= this.dataProvider.sampleFactories();

  }

  

  onChange(factory){
    this.factory = factory
  }
   onLineChange(line) {
    this.line = line;
    let count = 0;
    this.line.processes.forEach(process => {
      if (process.p_error) {
        count += 1;
      }
      process.poor = this.dataProvider.getProcessPoor();
      console.log(process);
    });
    this.line.ratio = {
      daily: (Math.round(Math.random() * 1000)),
      daily_per: (Math.round(Math.random() * 100)) + '%',
      weekly: (Math.round(Math.random() * 10000)),
      weekly_per: (Math.round(Math.random() * 100)) + '%',
      monthly: (Math.round(Math.random() * 100000)),
      monthly_per: (Math.round(Math.random() * 100)) + '%',
    }
    this.randomInterval = setInterval(() => {
      this.randomize();
      this.randomProcess();
    }, 3000);
  }


  lineSelectStop(){
    this.line = null;
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
  
  randomProcess(){
    this.line.ratio = {
      daily: (Math.round(Math.random() * 1000)),
      daily_per: (Math.round(Math.random() * 100)) + '%',
      weekly: (Math.round(Math.random() * 10000)),
      weekly_per: (Math.round(Math.random() * 100)) + '%',
      monthly: (Math.round(Math.random() * 100000)),
      monthly_per: (Math.round(Math.random() * 100)) + '%',
    }
  }

}
