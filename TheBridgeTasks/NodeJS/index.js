const http = require("http");

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Control-Max-Age', 2592000);

    res.writeHead(200, {'Content-Type': 'text/html'});

    const data = {
        url: req.url,
        mensaje: `Mensaje del servirdor recibido: ${req.url}`
    }

    res.write(JSON.stringify(data));
    return res.end();

}).listen(7777);
