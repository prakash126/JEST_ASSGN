let regArr = [];
function registration(obj) {
    console.log({obj});
    if(obj.uid&&obj.pwd&&obj.role){
        regArr.push({uid:obj.uid,pwd:obj.pwd,role:obj.role});
        return "Registration is successfull"
    }else{
        return "Registration failed ! something data is missing!"
    }
}

function login(obj) {
    let data = regArr.find(user=>user.uid === obj.uid && user.pwd === obj.pwd);
    console.log(data)
    if(data){
        return "valid user"
    }else{
        return "invalid user"
    }
}

module.exports = {registration,login};