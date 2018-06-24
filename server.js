// http, express 서버
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

server.listen(3000, err => {
   console.log('Server is running @ 3000');
});

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/index.html');
});

// Socket.io 서버
const io = require('socket.io')(server);
io.on('connection', socket => {
    console.log('Client connected');

    socket.on('cardnum changed', data => {


        /*
        var i= data;
        var i = i.splite('1') * 102

        var i= i[0]+'A'+i[1]+'A'+i[2]+'A'+i[3]+'A'+i[4]+i[5]+i[6]+'A'+i[7]+i[8]+i[9]+i[10];
        for(var j=0;j==i[MAX];j++)
        {
            var i= i[j]+'T'
        }
        */
        var i = 'AQW'+data*20+'XD10D'

        const recode = i;

        console.log('recode changed : ', recode);
        io.emit('recode changed', recode)
     });
});
