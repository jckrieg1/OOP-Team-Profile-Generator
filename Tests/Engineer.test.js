
const Engineer = require('../lib/Engineer');

// creating engineer object  
it('should create an Engineer object', () => {
    const engineer = new Engineer('Joey', id, 'joeyck101@gmail.com', 'jckrieg1');
    
    expect(engineer.github).toEqual(expect.any(String));
});

// gets github from getGithub()
it('shoud get engineer github value', () => {
    const engineer = new Engineer('Joey', id, 'joeyck101@gmail.com', 'jckrieg1');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
it('should get role of employee', () => {
    const engineer = new Engineer('Joey', id, 'joeyck101@gmail', 'jckrieg1');

    expect(engineer.getRole()).toEqual("Engineer");
});