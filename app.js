var sql = require('msnodesql');
// dont't mind the password. Is on my local laptop, so who cares! ;-)
var connectionString = "Driver={SQL Server Native Client 11.0};Server=127.0.0.1;Database=SaturdayDb;Uid=sa;Pwd=CodicePlastico";;

//stream();
//queryRaw();
query();

function stream(){
	var stmt = sql.query(connectionString, "SELECT top 1 * FROM Contacts");
    // meta contains an array of object (one per column):
    // name, size, nullable, type, sqlType
    stmt.on('meta', function (meta) { console.log("We've received the metadata", meta); });
    // idx is the index
	stmt.on('row', function (idx) { console.log("We've started receiving a row:" + idx); });
    // for each column: index of the column e value
	stmt.on('column', function (idx, data, more) { console.log(idx + ":" + data);});
    
    // done
	stmt.on('done', function () { console.log("All done!"); });
    
    // in case of error
	stmt.on('error', function (err) { console.log("We had an error :-( " + err); });
}

function query(){

	var testQuery = "SELECT top 10 * FROM Contacts";

	sql.query(connectionString, testQuery, function(err, result) {
		console.log(result);
	});
}

function queryRaw(){

	var testQuery = "SELECT top 10 * FROM Contacts";

	sql.queryRaw(connectionString, testQuery, function(err, result) {
		console.log(result);
	});
}