const express = require('express');
const app = express();


// socket 
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
// socket 


app.get('/', (req, res) => {
    // .html dùng sendFile 
    // .pug dùng render
    res.sendFile(__dirname + '/index.html');
});

// mỗi lần truy cập vào sẽ tạo 1 socket socket này chính là cái ông truy cập vào cho nên từ socket này gửi thông báo đi
// thì chỉ có mỗi chính ông đó nhận đc cho nên muốn từ socket gửi thông báo mà ai cũng nhận thì đúng từ socket tổng
// để chúng ta gửi đi socket tổng đó chính là biến io 


// lắng nghe sự kiến dùng on phát ra dùng in 

// bên client ta tích hợp 1 soket io khi client truy cập thì server nhận 1 connection 
//   thì sẽ chay sự kiện connection này và phát dữ liệu sang client
io.on('connection', (socket) => {
    console.log('a user connected',socket.id);

    // dùng emit để trả ra phía client
    // SERVER_SEND_SOCKET_ID tên sự kiện
    socket.emit("SERVER_SEND_SOCKET_ID",socket.id)
    



    // socket.on('CLIENT_SEND_MESSAGE',msg=>{
    //     console.log('message: '+msg);     

    //     // sau khi nhận đc message từ client 
    //     //ta phải trả về client nào gửi lên server trả về chính client đó còn 1 client khác sẽ ko nhận đc message
    //     // dùng emit để trả ra phía client(A gửi lên server 1 message, server chỉ phản hồi về cho A)
            //Ví dụ : gửi tin nhắn bị lỗi thì thông báo lỗi đó chỉ có thằng A nhận đc 
    //     socket.emit("SERVER_RETURN_MESSAGE",msg)
    // })

    socket.on('CLIENT_SEND_MESSAGE',msg=>{
        console.log('message: '+msg);     
        // dùng socket tổng tất cả đều nhận 
        //ví dụ: tính năng chat theo nhóm
        // io.emit("SERVER_RETURN_MESSAGE",msg)

        //ta lại muốn khi A gửi tin nhắn đi thì b,c.. nhận đc chừ thằng A 
        // ví dụ : thông báo sinh nhật A,server chỉ gửi thông báo cho B,C
        socket.broadcast.emit("SERVER_RETURN_MESSAGE",msg);
    })
});

// cách để gửi data từ client lên cho server 
// thì cũng dùng socket.emit 

server.listen(3000, () => {
  console.log('http://localhost:3000/ ');
});