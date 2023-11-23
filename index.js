const http = required('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Hello, World");
    } 
    else if (req.url === '/revou') {
        res.writeHead(200, {'Content-Type': 'text/plain' });
        res.end("Hello, Pana");
    }
    else {
    res.writeHead(400, {'Content-Type': 'text/plain' });
    res.end("URL Wrong");
    }
});

const PORT = 3000;
const IP = '127.0.0.1';
server.listen(PORT, IP, () => {
    console.log('Server sudah jalan!');
})