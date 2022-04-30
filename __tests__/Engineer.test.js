const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates an engineer with a name, id, email, github', () => {
    const engineer = new Engineer('Bill', 12, 'bill@gmail.com', 'billHub');

    expect(engineer.name).toBe('Bill');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test("creates engineer object", () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object");
});

test('gets engineer name', () => {
    const engineer = new Engineer('Bill', 12, 'bill@gmail.com');
    
    expect(engineer.getName()).toEqual(expect.stringContaining('Bill'));
});

test('gets engineer id', () => {
    const engineer = new Engineer('Bill', 18, 'bill@gmail.com');
    expect(engineer.getId()).toEqual('18');
});

test('gets engineer email', () => {
    const engineer = new Engineer('Bill', 12, 'bill@gmail.com');
    expect(engineer.getEmail()).toEqual(expect.stringContaining('bill@gmail.com'));
});

test('gets engineer role', () => {
    const engineer = new Engineer('Bill', 12, 'bill@gmail.com');
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});

test('gets engineer github', () => {
    const engineer = new Engineer('Bill', 12, 'bill@gmail.com', 'billHub');
    expect(engineer.getGithub()).toEqual(expect.stringContaining('billHub'));
});
