const Bookmatchers = {
    returnBookById:function(id) {
        let book = [
            {id:1,name:"b1"},
            {id:2,name:"b2"},
            {id:3,name:"b3"},
            {id:4,name:"b4"},
            {id:5,name:"b5"}
        ]
        for(let bk of book){
            if(bk.id === id){
                return bk;
            }
        }
        return null;
    }
}

module.exports = Bookmatchers;