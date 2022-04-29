class Intern {
    constructor(name, id, email, school){
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = 'Intern'
        this.image = "fa-solid fa-pencil"
    }

getName() {
    return `${this.name}`;
};

getId() {
    return `${this.id}`;
};

getEmail() {
    return `${this.email}`;
};

getRole() {
    return `${this.role}`;
};


}

module.exports = Intern;