import { DataProvider } from './../../providers/data';
import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { TreeviewI18n, TreeviewItem, TreeviewConfig, TreeviewHelper, TreeviewComponent,
  TreeviewEventParser, OrderDownlineTreeviewEventParser, DownlineTreeviewItem } from 'ngx-treeview';
import * as moment from 'moment';
import * as _ from 'lodash';

@Injectable()
export class ProductTreeviewConfig extends TreeviewConfig {
  hasAllCheckBox = false;
  hasFilter = false;
  hasCollapseExpand = false;
  maxHeight = 800;
}

@Component({
  templateUrl: 'manager-setting.component.html',
  providers: [
    {
      provide: TreeviewEventParser,
      useClass: OrderDownlineTreeviewEventParser
    },
    {
      provide: TreeviewConfig,
      useClass: ProductTreeviewConfig
    }
  ]
})

export class ManagerSettingComponent implements OnInit {
  @ViewChild(TreeviewComponent) treeviewComponent: TreeviewComponent;
  items: TreeviewItem[];
  
  private companies: any;
  private departments: any;
  private teams: any;
  
  private company: any;
  private department: any;
  private team: any;

  private isAccept: boolean = false;

  private factories: any;
  private factory: any;
  private addFactoryView: boolean = false;

  private lines: any;
  private line: any;
  private addLineView: boolean = false;

  private processes: any;
  private process: any;
  private addProcessView: boolean = false;

  private machines: any;
  private machine: any;
  private addMachineView: boolean = false;

  private ProcessRandomGenerate: any;

  private tempTasks:any = [];
  private startDate: any;
  private endDate: any;

  constructor(public dataProvider: DataProvider, public db: AngularFireDatabase) {
    this.db.list('factories').subscribe(factories => {
      this.factories = factories;
    })
    this.getTreeView();

    this.db.object('/tasks').subscribe((tasks)=>{
      if(tasks){
      this.tempTasks = tasks
      }
    })
    if(this.tempTasks!=null){
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
    }
    this.companies = this.dataProvider.sampleWorker();
    this.getWorkerTreeView();
  }
  

  ngOnInit() {
    
  }

  countProps(obj) {
    let count = 0;
    for (let p in obj) {
      obj.hasOwnProperty(p) && count++;
    }
    return count; 
  }

  deleteTask(task){
    let temp = this.tempTasks;
    for(let i=0; i<temp.length; i++){
      if(temp[i].id == task.id){
        temp.splice(i,1);
        break;
      }
    }
    this.db.object('/').update({
      tasks: temp
    })
  }

  addTask(name, id){
    let temp= [];
    if(this.tempTasks.length > 0){temp = this.tempTasks;}
    
    temp.push({
      complete: (Math.floor(Math.random() * 100)+1),
      end: moment(this.endDate).subtract(1, 'months').format('YYYY-MM-DD'),
      start: moment(this.startDate).subtract(1, 'months').format('YYYY-MM-DD'),
      id: id,
      text: name,
      width: (Math.floor(Math.random() * 100)+1)+'%'
    })
    this.db.object('/').update({
      tasks: temp
    })
    console.log(moment(this.startDate).subtract(1, 'months').format('YYYY-MM-DD'))
    console.log(moment(this.endDate).subtract(1, 'months').format('YYYY-MM-DD'))
  }

  modifyTask(task){
    let temp = this.tempTasks;
    
  }

  // 공장/라인/공정 Tree-View 설정
  getTreeView(){
    this.db.list('factories').subscribe(factories => {
      if (factories) {
        let temp1 = new TreeviewItem({
          text: 'Factories', value: factories, children: [
              { text: 'temp', value: 0 },
          ]
      });
      temp1.children.splice(0,1);
        
        for (let i = 0; i < factories.length; i++) {
          
          this.db.list('factories/' + factories[i].$key + '/lines').subscribe(lines => {
            if (lines) {
              let temp2 = new TreeviewItem({
                text: factories[i].title, value: factories[i].$key, children: [
                    { text: 'temp', value: 0 },
                ]
            });
            temp2.children.splice(0,1);
              for (let j = 0; j < lines.length; j++) {
                let temp3 = [];
                this.db.list('factories/' + factories[i].$key + '/lines/' + lines[j].$key + '/processes', {
                  query: {
                    orderByChild: 'p_code'
                  }
                }).subscribe(processes => {
                  if (processes) {
                    for (let k = 0; k < processes.length; k++) {
                      temp3.push(new TreeviewItem({
                        text: processes[k].p_name,
                        value: factories[i].$key + '/lines/' + lines[j].$key + '/processes/' +processes[k].$key
                      }));
                    }

                  }
                  if (temp3.length > 0) {
                    temp2.children.push(new TreeviewItem({
                      text: lines[j].name,
                      value: factories[i].$key + '/lines/' + lines[j].$key,
                      children: temp3
                    }));
                  } else {
                    temp2.children.push(new TreeviewItem({
                      text: lines[j].name,
                      value: factories[i].$key + '/lines/' + lines[j].$key
                    }));
                  }
                })
              }
              temp1.children.push(temp2);
              
            }
        });
          
        }

      this.items = [temp1];
      }
    });
  }

  removeItem(item: TreeviewItem) {
    let isRemoved = false;
    
    for (const tmpItem of this.items) {
      if (tmpItem === item) {
        _.remove(this.items, item);
      } else {
        isRemoved = TreeviewHelper.removeItem(tmpItem, item);
        if (isRemoved) {
          break;
        }
      }
    }

    if (isRemoved) {
      this.treeviewComponent.raiseSelectedChange();
    }

    this.db.object('factories/'+item.value).remove();
  }



  login(password) {
    this.db.object('/').subscribe(DB => {
      if (password == DB.password) {
        this.isAccept = true;
      } else {
        this.isAccept = false;
      }
    });
  }

  addFactory() {
    this.factory = null;
    this.line = null;
    this.process = null;
    this.addLineView = false;
    this.addFactoryView = true;
  }
  cancelFactoryAdd() {
    this.addFactoryView = false;
  }
  onChange(factory) {
    this.addFactoryView = false;
    this.factory = factory;
    this.db.list('factories/' + this.factory.factoryKey + '/lines/').subscribe(lines => {
      this.lines = lines;
    })

    this.addProcessView = false;
  }

  factoryAdd(factoryName) {
    let _factory = {
      title: factoryName
    }
    this.db.list('factories/').push(_factory).then((success) => {
      this.db.object('factories/' + success.key).update({
        factoryKey: success.key
      })
      this.db.object('factories/' + success.key).subscribe(factory => {
        this.factory = factory;
        this.lines = factory.lines;
      })
    })
    this.addFactoryView = false;
  }

  addLine() {
    this.line = null;
    this.process = null;
    this.addLineView = true;
    this.addProcessView = false;
  }
  cancelLineAdd() {
    this.addLineView = false;
  }

  lineAdd(lineName, productName, stockAmount, stockLimitAmount) {
    let _product = {
      name: productName,
      stock_amount: stockAmount,
      limit: stockLimitAmount
    }
    let _line = {
      name: lineName,
      product: _product
    }
    this.db.list('factories/' + this.factory.factoryKey + '/lines/').push(_line).then((success) => {
      this.db.object('factories/' + this.factory.factoryKey + '/lines/' + success.key).update({
        lineKey: success.key
      })
    })
    this.addLineView = false;
  }

  onLineChange(line) {
    this.addLineView = false;
    this.line = line;
    this.db.list('factories/' + this.factory.factoryKey + '/lines/' + this.line.lineKey + '/processes/').subscribe(processes => {
      this.processes = processes;
    })
    this.addProcessView = false;
  }

  addProcess() {
    this.addProcessView = true;
  }
  cancelProcessAdd() {
    this.addProcessView = false;
  }
  processAdd(processName, processCode) {
    let process_code:number = +processCode;
    let _process = {
      p_name: processName,
      p_code: process_code,
      poor: this.dataProvider.getProcessPoor(),

      machines: this.dataProvider.getProcessMachine(),
      createTime: Date.now(),
    }
    if(processCode % 2==0){
      this.db.list('factories/' + this.factory.factoryKey + '/lines/' + this.line.lineKey + '/processes/').push(_process).then((success) => {
        this.db.object('factories/' + this.factory.factoryKey + '/lines/' + this.line.lineKey + '/processes/' + success.key).update({
          processKey: success.key,
          p_error: false,
          running_percentage: Math.floor((Math.random() * 100) + 1),
        })
        this.db.object('factories/' + this.factory.factoryKey + '/lines/' + this.line.lineKey + '/processes/' + success.key).subscribe((process) => {
          this.process = process;
        })
      })
        
    }
    else{
    this.db.list('factories/' + this.factory.factoryKey + '/lines/' + this.line.lineKey + '/processes/').push(_process).then((success) => {
      this.db.object('factories/' + this.factory.factoryKey + '/lines/' + this.line.lineKey + '/processes/' + success.key).update({
        processKey: success.key,
        p_error: Math.random() >= 0.99,
        running_percentage: Math.floor((Math.random() * 100) + 1),
      })
      this.db.object('factories/' + this.factory.factoryKey + '/lines/' + this.line.lineKey + '/processes/' + success.key).subscribe((process) => {
        this.process = process;
      })
    })
  }
  this.process = null;
  }
  onProcessChange(process) {
    this.addProcessView = false;
    this.process = process;
  }


  // 직원 Tree-View 설정
  getWorkerTreeView(){
    this.db.list('workers').subscribe(workers => {
      if (workers) {
        let temp1 = new TreeviewItem({
          text: '회사', value: workers, children: [
              { text: 'temp', value: 0 },
          ]
      });
      temp1.children.splice(0,1);
        
        for (let i = 0; i < workers.length; i++) {
          
          this.db.list('workers/' + '/' + i  +'/'+ '/lines').subscribe(lines => {
            // if (lines) {
            //   let temp2 = new TreeviewItem({
            //     text: factories[i].title, value: factories[i].$key, children: [
            //         { text: 'temp', value: 0 },
            //     ]
            // });
            // temp2.children.splice(0,1);
            //   for (let j = 0; j < lines.length; j++) {
            //     let temp3 = [];
            //     this.db.list('factories/' + factories[i].$key + '/lines/' + lines[j].$key + '/processes', {
            //       query: {
            //         orderByChild: 'p_code'
            //       }
            //     }).subscribe(processes => {
            //       if (processes) {
            //         for (let k = 0; k < processes.length; k++) {
            //           temp3.push(new TreeviewItem({
            //             text: processes[k].p_name,
            //             value: factories[i].$key + '/lines/' + lines[j].$key + '/processes/' +processes[k].$key
            //           }));
            //         }

            //       }
            //       if (temp3.length > 0) {
            //         temp2.children.push(new TreeviewItem({
            //           text: lines[j].name,
            //           value: factories[i].$key + '/lines/' + lines[j].$key,
            //           children: temp3
            //         }));
            //       } else {
            //         temp2.children.push(new TreeviewItem({
            //           text: lines[j].name,
            //           value: factories[i].$key + '/lines/' + lines[j].$key
            //         }));
            //       }
            //     })
            //   }
            //   temp1.children.push(temp2);
              
            // }
        });
          
        }

      // this.items = [temp1];
      }
    });
  }


}

