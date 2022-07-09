const Employee = require('../lib/Employee');

test("create an employee object", () => {
    const employee = new Employee ('Mitchel', 19, 'mitchmneide@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})
test('gets employee name', () => {
    const employee = new Employee ('Mitchel', 19, 'mitchmneide@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
}) 
test('get employee id', () => {
   const employee = new Employee ('Mitchel', 19, 'mitchmneide@gmail.com');

   expect(employee.getId()).toEqual(expect.any(Number));
})
test('get employee email', () => {
    const employee = new Employee ('Mitchel', 19, 'mitchmneide@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String))
})
test('get employee role', () => {
    const employee = new Employee ('Mitchel', 19, 'mitchmneide@gmail.com');

    expect(employee.getRole()).toEqual("Employee")
})