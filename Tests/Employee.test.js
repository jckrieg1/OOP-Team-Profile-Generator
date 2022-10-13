const Employee = require('../lib/Employee');

// creates employee object
it('should create employee object', () => {
    const employee = new Employee('Joey', id, 'joeyck101@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets id from getId()
it('should get employee name', () => {
    const employee = new Employee('Joey', id, 'joeyck101@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id from getId() 
it('should get employee ID', () => {
    const employee = new Employee('Joey', id, 'joeyck101@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
it('should get employee email', () => {
    const employee = new Employee('Joey', id, 'joeyck101@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
it('should get role of employee', () => {
    const employee = new Employee('Joey', id, 'joeyck101@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 





