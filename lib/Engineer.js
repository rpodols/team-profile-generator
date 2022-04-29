class Engineer {
    constructor(name, id, email, github){
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.role = 'Engineer'
        this.image = "fa-solid fa-glasses";
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

module.exports = Engineer;