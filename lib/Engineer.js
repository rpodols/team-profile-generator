const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer'
        this.image = "fa-solid fa-glasses";
    }

getGithub() {
    return `${this.github}`;
};

}


module.exports = Engineer;