const Employee = require('../lib/Employee');
const employee = new Employee('Joey', "11", 'joeyck101@gmail.com');

// creates employee object
it('should create employee object', () => {
    // const employee = new Employee('Joey', "11", 'joeyck101@gmail.com');

    expect(employee.name).toBe("Joey");
    expect(employee.id).toBe("11");
    expect(employee.email).toBe("joeyck101@gmail.com");
});

// gets id from getName()
it('should get employee name', () => {
    // const employee = new Employee('Joey', "11", 'joeyck101@gmail.com');

    expect(employee.getName()).toBe("Joey");
});

// gets id from getId() 
it('should get employee ID', () => {
    // const employee = new Employee('Joey', "11", 'joeyck101@gmail.com');

    expect(employee.getId()).toBe("11");
});

// gets emails from getEmail()
it('should get employee email', () => {
    // const employee = new Employee('Joey', "11", 'joeyck101@gmail.com');

    expect(employee.getEmail()).toBe(expect.stringContaining("joeyck101@gmail.com"));
});

// gets role from getRole()
it('should get role of employee', () => {
    // const employee = new Employee('Joey', "11", 'joeyck101@gmail.com');

    expect(employee.getRole()).toBe("Employee");
}); 





