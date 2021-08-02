"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.displayEmployeeDetails = function () {
        var promptSync = require('prompt-sync')();
        this.name = promptSync('Enter the name:'),
            this.address = promptSync('Enter Address:'),
            this.mobile = promptSync('Enter Mobile:');
        console.log("Employee Details\nName:" + this.name + " \nAddress:" + this.address + "\nMobile:" + this.mobile);
    };
    return Employee;
}());
exports.Employee = Employee;
var inn = new Employee();
inn.displayEmployeeDetails();
