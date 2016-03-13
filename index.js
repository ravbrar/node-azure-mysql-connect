var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'au-cdbr-azure-east-a.cloudapp.net',
  user     : 'b94840bd7cd56d',
  password : 'fe8b7de1',
  database : 'bears'
});

connection.connect();

connection.query('INSERT INTO bears.bear1 (name) VALUES (2);', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else{
    console.log('Error while performing Query.');
    console.log(err);
}
	
});

connection.end();