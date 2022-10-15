## ✔ Socket.IO

<br>


모듈 설치하기

    npm i socket.io -S


<br>

```js
// app.js 예시코드
const express = require("express");
const { Server } = require("http"); 
const socketIo = require("socket.io"); 

const app = express();
const http = Server(app); 
const io = socketIo(http);


io.on("connection", (sock) => {
  console.log("새로운 소켓이 연결됐어요!");

  sock.on("disconnect", () => {
    console.log(sock.id, "연결이 끊어졌어요!");
  });
});


http.listen(3000, () => {
  console.log("서버가 요청을 받을 준비가 됐어요");
});
```

소켓은 app 대신 http 객체로 서버를 열어줘야 한다.


<br>

## ✔ event handler

```js
socket.on('이벤트 이름', (data) => {
    // 이벤트 이름은 프론트와 약속한 이름이다.
});
```

메세지 전송

```js
// 소켓이 연결된 모든 클라이언트에게 메세지를 전송
io.emit('event_name',data);

// 메세지를 전송한 클라이언트에게만 메세지를 전송한다.
socket.emit('event_name');

// 메세지를 전송한 클라이언트를 제외한 모든 클라이언트에게 메세지를 전송한다.
socket.broadcast.emit('event_name',data);

// 특정 클라이언트에게만 메세지를 전송한다.
io.to(socket.id).emit('event_name',data);
```

<br>

***

<br>

## ✔ NameSpace

```js
// server-side
let userIO = io.of('/myPath');

userIO.on('connection',(socket)=>{
    console.log('여기는 /myPath로 접근한 유저들만 소켓에 접속할 수 있습니다.')
});

// Client-side
// 지정 namespace로 접속한다
var socket = io('/myPath');
```

socket.io는 경로를 할당하는 의미로 socket에 namespace를 지정할 수 있다.

즉, 경로에 따라 클라이언트가 해당 경로에 접근해야히만 socket에 접속된다.

nameSpace를 특별히 지정하지 않은 경우는 디폴트 값 '/'이 적용된다.

<!-- https://poiemaweb.com/nodejs-socketio -->