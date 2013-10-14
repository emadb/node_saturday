var sql = require('msnodesql');
// dont't mind the password. Is on my local laptop, so who cares! ;-)
var connectionString = "Driver={SQL Server Native Client 11.0};Server=127.0.0.1;Database=wkdo;Uid=sa;Pwd=CodicePlastico";;
var testQuery = "SELECT * FROM Cliente";

sql.query(connectionString, testQuery, function(err, result) {
    console.log(err, result);
    console.log("Query result: " + result[0]['Column0'] + " \n");
});

