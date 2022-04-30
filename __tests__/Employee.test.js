const Employee = require('../lib/Employee');

test('creates an employee with a name, id, and email', () => {
    const employee = new Employee('Bill', 12, 'bill@gmail.com');

    expect(employee.name).toBe('Bill');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("creates employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test('gets employees name', () => {
    const employee = new Employee('Bill', 12, 'bill@gmail.com');
    
    expect(employee.getName()).toEqual(expect.stringContaining('Bill'));
});

test('gets employees id', () => {
    const employee = new Employee('Bill', 18, 'bill@gmail.com');
    expect(employee.getId()).toEqual('18');
});

test('gets employee email', () => {
    const employee = new Employee('Bill', 12, 'bill@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining('bill@gmail.com'));
});

test('gets employee role', () => {
    const employee = new Employee('Bill', 12, 'bill@gmail.com');
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});
