const express = require('express');
const http = require('http');
const morgan = require('morgan');

const bodyParser = require('body-parser');
const port = 3000;

const hostname = 'localhost';
const app = express();
const  dishRouter = require('./routes/dishRouer');
const promoRouter = require('./routes/promotions');
const leadRouter = require('./routes/leaders');
app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leadRouter);

app.use(bodyParser.json());

app.use((req, res, nect) => {
    console.log(req.header);
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.end('<html><body><h1>This is an Express Server!</h1></body></html>')
});
app. use(morgan('dev')); // serving static files .morgan is used for logging purposes.
app.use(express.static(__dirname + '/public'));
const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/` );
})