const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
        this.image = "fa-solid fa-people-roof";
    }

    getOfficeNumber() {
        return `${this.officeNumber}`;
    };
}

module.exports = Manager;