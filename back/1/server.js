console.log(11);

const http = require('http');

const s = (req, res) => {
    console.log(req.url);
    res.end('Im 1')
};

http.createServer(s).listen(8081);