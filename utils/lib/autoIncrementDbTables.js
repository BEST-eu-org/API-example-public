// This script should be run independently with `node autoIncrementDbTables.js`
// It makes all 'id' columns (e.g. Team_ in general_Team_) autoincrement

global.rootPath = "/home/delimir/BEST/IT/API/";
runQuery = require('./db').runQuery;

// This will disable the foreign key checks in order to allow to alter the columns which are foreign key in other tables
// It only does this for the current connection, so there is no need to set it back to 1 manually at the end
runQuery("SET foreign_key_checks = 0").then( tmp => { 
    console.log(tmp);
    console.log("Foreign key check = 0");
    const tables_sql = "SHOW TABLES";
    runQuery(tables_sql).then(async res => {
            res.forEach( r => {
                let tableName = r.Tables_in_api_project;  
                let columns_sql = `SHOW COLUMNS FROM ${tableName}`;
                runQuery(columns_sql).then( columns => {
                    let id_column = columns[0].Field;
                    alter_sql = `ALTER TABLE ${tableName} MODIFY COLUMN ${id_column} INT auto_increment`;
                    alter_sql2 = `ALTER TABLE ${tableName} ADD PRIMARY KEY(${id_column})`;
                    Promise.all([runQuery(alter_sql), runQuery(alter_sql2)]).then( res => { 
                        console.log(res);console.log(`Done ${tableName} query`); 
                    }).catch( error => {
                        console.log(error); 
                    });
                });
            });
            }
        );
});
