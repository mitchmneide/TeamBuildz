const Engineer = require('../lib/Engineer');

test("create an engineer object", () => {
    const engineer = new Engineer ('Mitchel', 19, 'mitchmneide@gmail.com', "https://github.com/mitchmneide");

    expect(engineer.github).toEqual(expect.any(String));
})
test("tests github", ()=> {
const engineer = new Engineer('Mitchel', 19, 'mitchmneide@gmail.com','https://github.com/mitchmneide')

expect(engineer.getGithub()).toEqual(expect.any(String));
})
test ('gets engineer role', () => {
    const engineer = new Engineer()

    expect(engineer.getRole()).toEqual('Engineer');
})