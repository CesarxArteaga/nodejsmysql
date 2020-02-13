var con = require('./connection');

var persona = {
    
    getAll: function(callback){
    return con.query('select * from persona', callback);
}
}


module.exports = persona;