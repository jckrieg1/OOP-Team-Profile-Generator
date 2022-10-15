
const Intern = require('../lib/Intern');
const intern = new Intern('Joey', '9', 'joeyck101@gmail.com', 'UCLA');

// creating intern object  
it('should create an intern object', () => {
    // const intern = new Intern('Joey', '9', 'joeyck101@gmail', 'UCLA');
    
    expect(intern.name).toBe("Joey");
    expect(intern.id).toBe('9');
    expect(intern.email).toBe('joeyck101@gmail.com');
    expect(intern.school).toBe('UCLA');
});

// gets school from getSchool()
it('should get employee school', () => {
    // const intern = new Intern('Joey', 9, 'joeyck101@gmail', 'UCLA');
    
    expect(intern.getSchool()).toBe('UCLA');
});

// gets role from getRole()
it('should get role of employee', () => {
    // const intern = new Intern('Joey', 9, 'joeyck101@gmail.com', 'UCLA');

    expect(intern.getRole()).toBe("Intern");
}); 
