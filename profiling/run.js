const http = require('http');

function notOptimisedCode(){
    for (let i = 0; i < 1e7; i++) {} // Intentional bottleneck
}

const requests = [];
const server = http.createServer((req, res) => {
  console.log('Hit and Run');
  requests.push(req);
  requests.push(req);
  notOptimisedCode();
  res.end('Hello, World!');
});

server.listen(3000, () => console.log('Server running on port 3000'));