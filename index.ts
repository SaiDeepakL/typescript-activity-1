import { Console } from 'console';

export class Employee {
  private name: string;
  private address:string;
  private mobile:string;

  
  public displayEmployeeDetails() {
    let promptSync = require('prompt-sync')();
 
    this.name = promptSync('Enter the name:'),
    this.address= promptSync('Enter Address:'),
    this.mobile= promptSync('Enter Mobile:');
    console.log("Employee Details\nName:"+this.name+" \nAddress:"+this.address+"\nMobile:"+this.mobile);
  }  
}

var inn = new Employee();
inn.displayEmployeeDetails();


