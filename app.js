
var swig = require('swig'), http = require('http');

var template = swig.compileFile('templates/template.html');

var output = template({
     pagename: 'awesome people'
    ,authors: [ 
    	'Paul', 'Jim', 'Jane' 
    ]
});

var server = http.createServer((request, response) => {
	response.writeHead(200, { "Content-Type": "text/html" });
	response.write(output);
	response.end();
});

server.listen(4000);

console.log("Server is listening");