const mysql = require('mysql');
const file = require('../helpers/file');

module.exports = class database_{
     constructor(){
         this._connection = undefined;
     }
    static async connection(){
         let data;
         try{
             data = JSON.parse(await file.rFSync('./.env','utf8'));
         }catch (err){
             console.error(err);
             throw new Error();
         }
        this._connection = mysql.createConnection({
            "user": data['database']['user'],
            "password": data['database']['password'],
            "database": data['database']['db'],
            "host": data['database']['host'],
        });

        this._connection.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
        });
    }

    static query(query, params=undefined, timeout=10000){
      return new Promise((success,reject)=>{
          this._connection.query({
              sql: query,
              timeout: timeout,
              values: params
          }, function (error, results, fields) {
              if (error) {
                  reject(error);
              }else {
                  success(results);
              }
          });
      });
    }
};