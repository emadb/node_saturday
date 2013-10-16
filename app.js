var sql = require('msnodesql');
// dont't mind the password. Is on my local laptop, so who cares! ;-)
var connectionString = "Driver={SQL Server Native Client 11.0};Server=127.0.0.1;Database=SaturdayDb;Uid=sa;Pwd=CodicePlastico";;

stream();

function stream(){
	var stmt = sql.query(connectionString, "SELECT top 10 * FROM Contacts");
	stmt.on('meta', function (meta) { console.log("We've received the metadata"); });
	stmt.on('row', function (idx) { console.log("We've started receiving a row:" + idx); });
	stmt.on('column', function (idx, data, more) { console.log(idx + ":" + data);});
	stmt.on('done', function () { console.log("All done!"); });
	stmt.on('error', function (err) { console.log("We had an error :-( " + err); });
}

function query(){

	var testQuery = "SELECT top 10 * FROM Contacts";

	sql.query(connectionString, testQuery, function(err, result) {
		console.log(result);
		
	});
}