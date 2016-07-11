var connection = require('../connection');

function Note() {

    this.get = (res, id=null) => {
        connection.acquire((err,con) => {
            var query = id?' where id = '+id:'';
            con.query('select * from notetable'+query, (err,result) => {
                con.release();
                res.send(result);
            });
        });
    };

    this.create = (note,res) => {
        connection.acquire((err,con) => {
            con.query('insert into notetable set ?', note, (err,result) => {
                con.release();
                if (err) res.send({status: 1, message: 'Note creation failed'});
                else res.send({status: 0, message: 'Note created successfully'});
            });
        });
    };

  this.update = (note,res) =>  {
        connection.acquire((err,con) => {
          con.query('update notetable set ? where id = ?', [note,note.id], (err,result) => {
            con.release();
            if (err) res.send({status: 1, message: 'Note update failed'});
            else res.send({status: 0, message: 'Note updated successfully'});
          });
        });
      };

    this.delete = (id,res) =>  {
        connection.acquire((err,con) => {
          con.query('delete from notetable where id = ?', [id], (err,result) => {
            con.release();
            if (err) res.send({status: 1, message: 'Failed to delete'});
            else res.send({status: 0, message: 'Deleted successfully'});
          });
        });
      };

}

module.exports = new Note();