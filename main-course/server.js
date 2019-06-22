const http = require('http');

const server = http.createServer((req,res) => {

res.end('Akash Anand first light diagnostics');
});

server.listen(process.env.PORT || 3000);
