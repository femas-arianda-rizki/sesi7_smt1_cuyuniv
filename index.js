const http = require("http");
const host = "127.0.0.1";
const port = 3002;

// request adalah data masuk dari luar
// rersponse adalah data keluar dari sistem
const server = http.createServer(function (request, response) {
  response.write("HELLO BRO");
});

server.listen(port, host, "", function () {
  console.log(`server menyala di ${host}:${port}`);
});
