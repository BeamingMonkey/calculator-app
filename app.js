const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;
    const a = parseFloat(query.a);
    const b = parseFloat(query.b);
    const op = query.op;

    let result;
    switch (op) {
        case 'add': result = a + b; break;
        case 'sub': result = a - b; break;
        case 'mul': result = a * b; break;
        case 'div': result = a / b; break;
        default: result = 'Invalid operation';
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Result: ${result}`);
});

server.listen(3000, () => console.log('Calculator app running on port 3000'));
