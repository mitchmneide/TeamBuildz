const Intern =require('../lib/Intern');

test("create an intern object", () => {
    const intern = new Intern ('Mitchel', 19, 'mitchmneide@gmail.com', 'UoM' );

    expect(intern.school).toEqual(expect.any(String));
})
test("tests office number", ()=> {
const intern = new Intern('Mitchel', 19 , 'mitchmneide@gmail.com', 'UoM' )

expect(intern.getSchool()).toEqual(expect.any(String));
})
test ('gets intern role', () => {
    const intern = new Intern()

    expect(intern.getRole()).toEqual('Intern');
})