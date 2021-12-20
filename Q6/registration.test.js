const user = require('./registration');


test('registration()',()=>{
    let obj={
        uid:101,
        pwd:"abc",
        role:'admin'
    }
    expect(user.registration(obj)).toEqual("Registration is successfull")
})

test('registration()',()=>{
    let obj={
        uid:101,
        pwd:"abc",
    }
    expect(user.registration(obj)).toEqual("Registration failed ! something data is missing!")
})

test('login()',()=>{
    let obj={
        uid:101,
        pwd:"abc",
    }
    expect(user.login(obj)).toEqual("valid user");
})

test('login()',()=>{
    let obj={
        uid:101,
        pwd:"abcd",
    }
    expect(user.login(obj)).toEqual("invalid user");
})