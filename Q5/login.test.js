let login = require("./login");

test("check login",()=>{
    expect(login(101,"abc")).toBe("valid user");
})

test("check login",()=>{
    expect(login(101,"abcd")).toBe("invalid user");
})