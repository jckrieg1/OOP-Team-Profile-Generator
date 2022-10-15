
const Manager = require('../lib/Manager');
const manager = new Manager('Joey', '09', 'joeyck101@gmail.com')

// creating manager object  
it('should create an Manager object', () => {
    // const manager = new Manager('Joey', id, 'joeyck101@gmail.com', 1);
    
    expect(manager.name).toBe('Joey');
    expect(manager.officeNumber).toBe('09');
    expect(manager.email).toBe('joeyck101@gmail.com');
});

// gets role from getRole()
it('should get role of employee', () => {
    // const manager = new Manager('Joey', id, 'joeyck101@gmail.com');

    expect(manager.getRole()).toBe("Manager");
}); 
