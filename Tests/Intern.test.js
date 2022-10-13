
const Intern = require('../lib/Intern');

// creating intern object  
it('should create an Intern object', () => {
    const intern = new Intern('Joey', id, 'joeyck101@gmail', 'UCLA');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school from getSchool()
it('should get employee school', () => {
    const intern = new Intern('Joey', id, 'joeyck101@gmail', 'UCLA');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
it('should get role of employee', () => {
    const intern = new Intern('Joey', id, 'joeyck101@gmail.com', 'UCLA');

    expect(intern.getRole()).toEqual("Intern");
}); 
