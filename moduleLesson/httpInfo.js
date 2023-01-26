const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Welcome to our about page");
  }
  res.end(`<p>Oops!</p>
    <h1>This is a 404 page not found</h1>
    <a href="/">Back home</a>`);
});

server.listen(5000);
