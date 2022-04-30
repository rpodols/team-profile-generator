const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates an manager with a name, id, and email', () => {
    const manager = new Manager('Bill', 12, 'bill@gmail.com', '34');

    expect(manager.name).toBe('Bill');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});

test("creates manager object", () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
});

test('gets manager name', () => {
    const manager = new Manager('Bill', 12, 'bill@gmail.com');
    
    expect(manager.getName()).toEqual(expect.stringContaining('Bill'));
});

test('gets manager id', () => {
    const manager = new Manager('Bill', 18, 'bill@gmail.com');
    expect(manager.getId()).toEqual('18');
});

test('gets manager email', () => {
    const manager = new Manager('Bill', 12, 'bill@gmail.com');
    expect(manager.getEmail()).toEqual(expect.stringContaining('bill@gmail.com'));
});

test('gets manager role', () => {
    const manager = new Manager('Bill', 12, 'bill@gmail.com');
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});

test('gets manager office number', () => {
    const manager = new Manager('Bill', 12, 'bill@gmail.com', '34');
    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining('34'));
});
