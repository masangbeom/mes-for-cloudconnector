import { AngularFireDatabase } from 'angularfire2/database';
import { DataProvider } from './../../providers/data';
import { Component,OnInit } from '@angular/core';

@Component({
  templateUrl: 'worker-manager.component.html'
})
export class WorkerManagerComponent implements OnInit{
  private companies: any;
  private departments: any;
  private teams: any;
  private workers: any;

  private company: any;
  private department: any;
  private team: any;

  constructor(public dataProvider: DataProvider, public db: AngularFireDatabase) {
    this.db.list('companies').subscribe(companies=>{
      this.companies = companies;
    })
    // setTimeout(()=>{
    //   this.onCompanyChange(this.companies[0]);
    //   this.onDepartmentChange(this.departments[0]);
    //   this.onTeamChange(this.teams[0]);
    //   }, 1500)
  }
  ngOnInit(){
  
  }

  onCompanyChange(company){
    this.company = company;
    this.db.list('companies/' + this.company.companyKey + '/departments/').subscribe(departments => {
      if(departments)
      this.departments = departments;
    })
    
  }

  onDepartmentChange(department){
    this.department = department;
    this.db.list('companies/' + this.company.companyKey + '/departments/' + this.department.departmentKey + '/teams/').subscribe(teams => {
      if(teams)
      this.teams = teams;
    })
  }

  onTeamChange(team){
    this.team = team;
    this.db.list('companies/' + this.company.companyKey + '/departments/' + this.department.departmentKey + '/teams/' + this.team.teamKey + '/workers/').subscribe(workers => {
      if(workers)
      this.workers = workers;
    })
  }
}
