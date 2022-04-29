const Employee = require('../lib/Employee');

test('creates an employee with a name, id, and email', () => {
    const employee = new Employee('name');

    expect(employee.name).toBe('name');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employees name', () => {
    const employee = new Employee('name');
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test('gets employees id', () => {
    const employee = new Employee('name');
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test('gets employee email', () => {
    const employee = new Employee('name');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets employee role', () => {
    const employee = new Employee('name');
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});



test("gets enemy's health value", () => {
    const enemy = new Enemy('goblin', 'sword');
  
    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
  });
  
  test('checks if enemy is alive or not', () => {
    const enemy = new Enemy('goblin', 'sword');
  
    expect(enemy.isAlive()).toBeTruthy();
  
    enemy.health = 0;
  
    expect(enemy.isAlive()).toBeFalsy();
  });