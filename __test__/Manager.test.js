const Manager =require('../lib/Manager')

test("create an manager object", () => {
    const manager = new Manager ('Mitchel', 19, 'mitchmneide@gmail.com');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
})