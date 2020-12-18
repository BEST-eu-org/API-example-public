const mysql = require('mysql');
const db_config = require(rootPath + 'config');
let db = mysql.createPool(db_config);

const runQuery = (sql, values) => {
    return new Promise( (resolve, reject) => {
        db.query(sql, values, (err, res) => {
            if (err) reject(err);
            else resolve (res);
        });
    });
};

module.exports = {runQuery: runQuery};

