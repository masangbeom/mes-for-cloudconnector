import { AngularFireDatabase } from 'angularfire2/database';
import { DataProvider } from './../../providers/data';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'worker-manager.component.html'
})
export class WorkerManagerComponent {
  private companies: any;
  private departments: any;
  private teams: any;
  
  private company: any;
  private department: any;
  private team: any;

  constructor(public dataProvider: DataProvider, public db: AngularFireDatabase) {
    this.companies = this.dataProvider.sampleWorker();
    
  }

  onCompanyChange(company){
    this.company = company;
    this.departments = this.company.departments;
  }

  onDepartmentChange(department){
    this.department = department;
    this.teams = this.department.teams;
  }

  onTeamChange(team){
    this.team = team;
  }
}
