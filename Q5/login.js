let login = [
    {uid:101,pwd:"abc"},
    {uid:102,pwd:"abcd"},
    {uid:103,pwd:"abce"},
    {uid:104,pwd:"abcf"},
    {uid:105,pwd:"abcg"}
]

function checkLogin(uid,pwd) {
    for(let lg of login){
        if(lg.uid === uid && lg.pwd === pwd){
            return "valid user"
        }
    }
    return "invalid user";
};

module.exports = checkLogin;