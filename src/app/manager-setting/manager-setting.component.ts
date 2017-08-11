import { DataProvider } from './../../providers/data';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import * as moment from 'moment';

@Component({
  templateUrl: 'manager-setting.component.html'
})

export class ManagerSettingComponent{
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

  constructor(public dataProvider: DataProvider, public db: AngularFireDatabase) { 
    this.db.list('factories').subscribe(factories=>{
      this.factories = factories;
    })
  }

  login(){
    this.isAccept=true;
  }

  addFactory(){
    this.factory = null;
    this.addFactoryView = true;
  }
  cancelFactoryAdd(){
    this.addFactoryView = false;
  }
  onChange(factory){
    this.addFactoryView = false;
    this.factory = factory;
    this.db.list('factories/'+this.factory.factoryKey+'/lines/').subscribe(lines=>{
      this.lines = lines;
    })
  }
  
  factoryAdd(factoryName){
    let _factory = {
      title: factoryName
    }
    this.db.list('factories/').push(_factory).then((success)=>{
      this.db.object('factories/'+success.key).update({
        factoryKey: success.key
      })
      this.db.object('factories/'+success.key).subscribe(factory=>{
        this.factory = factory;
      })
    })
    this.addFactoryView = false;  
  }

  addLine(){
    this.addLineView = true;
  }
  cancelLineAdd(){
    this.addLineView = false;
  }

  lineAdd(lineName, productName, stockAmount, stockLimitAmount){
    let _product = {
      name: productName,
      stock_amount: stockAmount,
      limit: stockLimitAmount
    }
    let _line = {
      name: lineName,
      product: _product
    }
    this.db.list('factories/'+this.factory.factoryKey+'/lines/').push(_line).then((success)=>{
      this.db.object('factories/'+this.factory.factoryKey+'/lines/'+success.key).update({
        lineKey: success.key
      })
    })
    this.addLineView = false;
  }

  onLineChange(line){
    this.addLineView = false;
    this.line = line;
    this.db.list('factories/'+this.factory.factoryKey+'/lines/'+this.line.lineKey+'/processes/').subscribe(processes=>{
      this.processes = processes;
    })
  }

  addProcess(){
    this.addProcessView = true;
  }
  cancelProcessAdd(){
    this.addProcessView = false;
  }
  processAdd(processName, processCode){
    let _process = {
      p_name: processName,
      p_code: processCode,
    }
    this.db.list('factories/'+this.factory.factoryKey+'/lines/'+this.line.lineKey+'/processes/').push(_process).then((success)=>{
      this.db.object('factories/'+this.factory.factoryKey+'/lines/'+this.line.lineKey+'/processes/'+success.key).update({
        processKey: success.key,
        poor_ppm: Math.round(Math.random() * 10),
        cycle_time: Math.round(Math.random() * 10),
        running_time: moment().format('lll'),
        running_percentage: Math.round(Math.random() * 100 + 1),
        machines: this.dataProvider.getProcessMachine(),
        poor: this.dataProvider.getProcessPoor(),
      })
    })
    this.addProcessView = false;
  }
  onProcessChange(process){
    this.addProcessView = false;
    this.process = process;
  }

}
