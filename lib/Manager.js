class Manager {
    constructor(name, id, email, officeNumber){
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = 'Manager';
        this.image = "fa-solid fa-people-roof";
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

module.exports = Manager;