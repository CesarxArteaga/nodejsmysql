var con = require('./connection');

var persona = {
    
    getAll: function(callback){
    return con.query('select * from persona', callback);},

    getById: function(id, callback){
        return con.query('select * from persona where id = ?', [id], callback);},

    create: function(persona,callback){
        var p = {
            nombre: persona.nombre,
            apellido: persona.apellido,
            cedula: persona.cedula
        }
        return con.query('insert into persona set ?', p, callback);
    },

    update: function(id, persona, callback){
        return con.query('update persona set ? where id = ?', [persona, id], callback);
    },

    delete: function(id, callback){
        return con.query('delete from persona where id = ?', [id], callback)
    }


}


module.exports = persona;