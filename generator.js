var Faker = require('Faker');
var MAX_VALUE = 500000;

var sql = require('msnodesql');
// dont't mind the password. Is on my local laptop, so who cares! ;-)
var connectionString = "Driver={SQL Server Native Client 11.0};Server=127.0.0.1;Database=SaturdayDb;Uid=sa;Pwd=CodicePlastico";;
var query = "INSERT INTO Contacts(Name, Email, State) Values (?,?,?)";

/*
for(var i=0;i<MAX_VALUE;i++){
    var name = Faker.Name.findName(); 
    var email = Faker.Internet.email(); 
    var address= Faker.Address.usState(); 
    
    console.log(name, email, address);
    
    sql.queryRaw(connectionString, query, [name, email, address], function(err, result) {
        console.log(i, err);
    });

}
*/

insertValue(1);

function insertValue(count){
    if (count < MAX_VALUE){
        var name = Faker.Name.findName(); 
        var email = Faker.Internet.email(); 
        var address= Faker.Address.usState(); 
        
        console.log(name, email, address);
        
        sql.queryRaw(connectionString, query, [name, email, address], function(err, result) {
            insertValue(count + 1);
        });
    }
}