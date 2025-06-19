// Triggering lint workflow
const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello from my containerized Node.js app!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
