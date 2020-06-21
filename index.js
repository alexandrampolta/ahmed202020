const express = require('express');
const server = express();
server.use(express.static("public"));
server.set('port' ,(process.env.PORT || 3000));
server.listen(server.get('port'),function(){
	
	
	console.log("we run our port 3000");
});
server.use(express.json());





	