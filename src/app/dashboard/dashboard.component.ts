import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data'
import { Router } from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {
  private factories: any;
  private factory: any;
  private lines: any;
  private process: any;
  public primaryModal: any;
  public dangerModal: any;
  public infoModal: any;

  public brandInfo = '#63c2de';
  public brandWarning = '#f8cb00';


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
  public barChart1Colors: Array < any > = [{
    backgroundColor: 'rgba(255,255,255,.3)',
    borderWidth: 0
  }];
  public barChart1Legend = false;
  public barChart1Type = 'bar';


  constructor(public dataProvider: DataProvider) {
    this.factories = this.dataProvider.sampleFactories();
    this.onChange(this.factories[0]);
  }

  onChange(factory) {
    this.factory = factory;
    this.lines = factory.lines;
    this.lines.forEach(line => {
      let count = 0;
      line.processes.forEach(process => {
        if (process.p_error) {
          count += 1;
        }
        process.poor = this.dataProvider.getProcessPoor();
      });
      if (count == 0) {
        line.lineRunning = true;
      } else {
        line.lineRunning = false;
      }
    });
  }

  isEven(n) {
    return n % 2 == 0;
  }
  isLineEnd(n) {
    return this.factory.line.processes.length == n;
  }
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}

