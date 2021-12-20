var matchers = require('./matcher');

describe('Matchers Suite', ()=>{
    test("Comparing objects with toBe() and toEqual()", ()=>{
        var empObj = {"id":102,"name":"Prakash","dept":"cs","Designation":"Full stack developer"}
       // expect (matchers.returnObject()).toBe(empObj);
       expect (matchers.returnObject()).toEqual(empObj);
    })

    test("to use Matcher .not.toBeNull() with an obk=ject",()=>{
        var empObj = matchers.returnObject();

        console.log("Returned data from the function is "+JSON.stringify(empObj));

        expect(empObj).not.toBeNull();
    })

    test("Use the matchers toBeTruthy() and toBeFalsy()",()=>{
        var bData = true;
        expect (bData).toBeTruthy();

        var empObj = matchers.returnObject();
        expect (empObj).toBeTruthy();

        bData = false;
        expect (bData).toBeFalsy();

        empObj = null;
        expect (empObj).toBeFalsy();
    });

    test('to use matcher toContain() and checking the content of the array for a name',()=>{
        var strNameToSearchFor = 'Pallav';
        expect (matchers.returnArrName()).toContain(strNameToSearchFor);
    })

    beforeEach(()=>{
        console.log("In BeforeEach()");
    });
    afterEach(()=>{
        console.log("In AfterEach()")
    })
    beforeAll(()=>{
        console.log("beforeAll()")
    })
    afterAll(()=>{
        console.log("afterAll()");
    })
})