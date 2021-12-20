const Macthers = 
{
    returnObject : function(){
        var empObj = {"id":102,"name":"Prakash","dept":"cs","Designation":"Full stack developer"}
        return empObj;
    },

    returnUrl:function () {
        var strUrl = "http://www.google.com";
        return strUrl;
    },
    returnArrName:function(params) {
        var arrName = ['Charan','Gyan','Prakash','Pallav','Mukta','Dhanasri','Keshav'];
        return arrName;  
    }
}

module.exports = Macthers;