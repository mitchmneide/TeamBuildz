const Manager =require('../lib/Manager')

test("create an manager object", () => {
    const manager = new Manager ('Mitchel', 19, 'mitchmneide@gmail.com', 123);

    expect(manager.office).toEqual(expect.any(Number));
})
test("tests office number", ()=> {
const manager = new Manager('Mitchel', 19 , 'mitchmneide@gmail.com', 123 )

expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
})
test ('gets manager role', () => {
    const manager = new Manager()

    expect(manager.getRole()).toEqual('Manager');
})