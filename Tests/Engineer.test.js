
const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Joey', '10', 'joeyck101@gmail.com', 'jckrieg1');

// creating engineer object  
it('should create an engineer object', () => {
    // const engineer = new Engineer('Joey', 10, 'joeyck101@gmail.com', 'jckrieg1');
    
    expect(engineer.name).toBe("Joey");
    expect(engineer.id).toBe("10");
    expect(engineer.email).toBe("joeyck101@gmail.com");
    expect(engineer.github).toBe("jckrieg1");
    
});

// gets github from getGithub()
it('shoud get engineer github', () => {
    // const engineer = new Engineer('Joey', 10, 'joeyck101@gmail.com', 'jckrieg1');

    expect(engineer.getGithub()).toBe("jckrieg1");
});

// gets role from getRole() 
it('should get role of employee', () => {
    // const engineer = new Engineer('Joey', 10, 'joeyck101@gmail', 'jckrieg1');

    expect(engineer.getRole()).toBe("Engineer");
});