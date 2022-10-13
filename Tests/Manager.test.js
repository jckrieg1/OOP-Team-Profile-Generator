
const Manager = require('../lib/Manager');

// creating manager object  
it('should create an Manager object', () => {
    const manager = new Manager('Joey', id, 'joeyck101@gmail.com', 1);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
it('should get role of employee', () => {
    const manager = new Manager('Joey', id, 'joeyck101@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 
