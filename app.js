var sql = require('msnodesql');
// dont't mind the password. Is on my local laptop, so who cares! ;-)
var connectionString = "Driver={SQL Server Native Client 11.0};Server=127.0.0.1;Database=SaturdayDb;Uid=sa;Pwd=CodicePlastico";;
var testQuery = "SELECT top 10 * FROM Contacts";

sql.query(connectionString, testQuery, function(err, result) {
	console.log(result);
	
});


var update = "UPDATE Contacts set name = 'ema' where Id = 19"
