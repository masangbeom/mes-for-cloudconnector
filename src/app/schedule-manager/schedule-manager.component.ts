import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../../providers/data'
import { DayPilot, DayPilotGanttComponent } from "daypilot-pro-angular";

@Component({
  templateUrl: 'schedule-manager.component.html'
})
export class ScheduleManagerComponent implements OnInit{
  private config: any;
  private tempTasks:any = [];
  private randomInterval: any;
  private factories: any;
  private selectOn: string = "";
  private factory: any;
  private selectLine: string = "";
  private line: any;
  private lines: any;
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

  constructor(public dataProvider: DataProvider, public db: AngularFireDatabase) {
    this.db.object('/tasks').subscribe((tasks)=>{
      this.config = {
        days: new DayPilot.Date().daysInMonth(),
        cellWidthSpec: "Auto",
        tasks: tasks
      };
    }) 
    this.db.list('factories').subscribe(factories=>{
      this.factories = factories;
    })

  }

  ngOnInit(){
    //Factory & Line 시연용 미리 선택
    // this.db.object('factories/'+"-KrnDUBL-Zwz5ERpbaB_").subscribe(factory=>{
    //   this.factory = factory;
    // })
    // this.db.list('factories/'+"-KrnDUBL-Zwz5ERpbaB_"+'/lines/').subscribe(lines=>{
    //   this.lines = lines;
    // })
    // this.db.object('/tasks').subscribe((tasks)=>{
    //   this.tempTasks = tasks;
    // }) 
    // for(let i=0; i<this.tempTasks.length; i++){  
    //     this.tempTasks[i] = {
    //       start: this.tempTasks[i].start,
    //       end: this.tempTasks[i].end,
    //       id: this.tempTasks[i].id,
    //       text: this.tempTasks[i].text,
    //       complete: this.tempTasks[i].complete,
    //       width: this.tempTasks[i].complete + '%'
    //     }
    //  }
    //   for(let i=0; i<this.config.tasks.length; i++){  
    // if(this.config.tasks[i].complete == 100){
    //   this.config.tasks[i].complete += "<strong> (완료)</strong>"
    // }
    // this.config.tasks[i].text += " (" + this.config.tasks[i].start;
    // this.config.tasks[i].text += " ~ ";
    // this.config.tasks[i].text += this.config.tasks[i].end+ ") ";
    // }
  }

  onChange(factory){
    this.db.object('/tasks').subscribe((tasks)=>{
      this.tempTasks = tasks;
    }) 
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
    this.factory = factory;
    this.db.list('factories/'+this.factory.factoryKey+'/lines/').subscribe(lines=>{
      this.lines = lines;
    })
  }
   onLineChange(line) {
    this.line = line;
   
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
    clearInterval(this.randomInterval);
    this.line.ratio = null;
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
