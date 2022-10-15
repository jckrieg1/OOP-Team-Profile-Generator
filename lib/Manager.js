class Manager {
    contructor(name, officeNumber, email,) {
        this.name=name;
        this.officeNumber=officeNumber;
        this.email=email;
        
    }
    getName() { return this.name};
    getOfficeNumber() { return this.officeNumber; }
    getEmail() {return this.email};
    getRole() {return "Manager"};
}

module.exports=Manager;