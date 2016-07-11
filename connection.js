var mysql = require('mysql');

function Connection() {
  this.pool = null;

  this.init = () => {
    this.pool = mysql.createPool({
      host     : 'alvenstranddb.cs5al0wf1hwt.eu-west-1.rds.amazonaws.com',
      user     : 'dalvenst',
      password : 'LsDa9291',
      database : 'angular2testprojectdb'
    });
  };

  this.acquire = (callback) => {
    this.pool.getConnection((err, connection) => {
      callback(err, connection);
    });
  };
}

module.exports = new Connection();

/*    'CREATE TABLE IF NOT EXISTS notetable (id int AUTO_INCREMENT,subject  varchar(255),text  varchar(255),date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,PRIMARY KEY (id)) '    */