const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates an intern with a name, id, and email', () => {
    const intern = new Intern('Bill', 12, 'bill@gmail.com', 'School of Rock');

    expect(intern.name).toBe('Bill');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("creates intern object", () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
});

test('gets intern name', () => {
    const intern = new Intern('Bill', 12, 'bill@gmail.com');
    
    expect(intern.getName()).toEqual(expect.stringContaining('Bill'));
});

test('gets intern id', () => {
    const intern = new Intern('Bill', 18, 'bill@gmail.com');
    expect(intern.getId()).toEqual('18');
});

test('gets intern email', () => {
    const intern = new Intern('Bill', 12, 'bill@gmail.com');
    expect(intern.getEmail()).toEqual(expect.stringContaining('bill@gmail.com'));
});

test('gets intern role', () => {
    const intern = new Intern('Bill', 12, 'bill@gmail.com');
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});

test('gets intern school', () => {
    const intern = new Intern('Bill', 12, 'bill@gmail.com', 'School of Rock');
    expect(intern.getSchool()).toEqual(expect.stringContaining('School of Rock'));
});
