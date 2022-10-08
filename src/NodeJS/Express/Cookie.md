## 쿠키 만들기 에제

<br>

서버가 클라이언트의 HTTP 요청(Request)을 수신할 때, 서버는 응답(Response)과 함께 Set-Cookie라는 헤더를 함께 전송할 수 있다.  

그 후 쿠키는 해당 서버에 의해 만들어진 요청과 Cookie HTTP 헤더 안에 포함되어 전달받는다.

<br>
쿠키를 사용하는 에제를 만들어보자.

```js
// Set-Cookie로 할당
app.get("/set-cookie", (req, res) => {
  const expire = new Date();
  expire.setMinutes(expire.getMinutes() + 60); // 만료 시간을 60분으로 설정합니다.

  res.writeHead(200, {
    'Set-Cookie': `name=kim; Expires=${expire.toGMTString()}; HttpOnly; Path=/`,
  });
  return res.status(200).end();
});
```


```js
// res.cookie로 할당하기
app.get("/set-cookie", (req, res) => {
  const expires = new Date();
  expires.setMinutes(expires.getMinutes() + 60); // 만료 시간을 60분으로 설정합니다.

  res.cookie('name', 'kim', {
    expires: expires,
    path : '/'
  });
  return res.status(200).end();
});
```

```js
// req로 cookie 접근하기
router.get('/get-cookie',(req,res)=>{
    const cookie = req.headers.cookie;

    console.log(cookie); // name=kim

    return res.status(200).json({cookie});
})
```


res.cookie의 옵션 값이다.

|옵 션|설명|  
|:---:|:---:|
| maxAge| 현재 시간으로부터 만료 시간을 밀리초(millisecond) 단위로 설정합니다.|
|expires|Cookie의 만료 날짜를 GMT 시간으로 설정합니다. 지정되어 있지 않거나 0으로 지정되어 있는 경우 session cookie를 생성합니다.|
|path|Cookie의 경로. 기본 경로는 "/"입니다.|
|domain|Cookie의 domain name입니다. 기본 domain name은 loaded입니다.|
|secure	| HTTPS에서만 cookie를 사용할 수 있도록 합니다.|
|httpOnly|웹 서버를 통해서만 cookie에 접근할 수 있도록 합니다.|
|signed	|cookie가 서명되어야 할 지를 결정합니다.|
---

<br>

***

<br>

## Cooklie-parser

<br>
cooklie-parser 를 사용해서 cookie를 다뤄보자

프로젝트에 cookie-parser를 받아준다.
```zsh
npm install cookie-parser
```

<br>

js코드

```js
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/get-cookie',(req,res)=>{
    const cookie = req.cookies;

    console.log(cookie); // { name: 'kim' }

    return res.status(200).json({cookie});
});
```

<br>

req.headers.cookie  =>  req.cookies   
name=kim            =>  { name: 'kim' }

request에서 받아오는 방법과 객체 형식으로 데이터를 받아오는 것을 확인할 수 있다.

<br>

자세한 cookie-parser의 사용법은 [공식문서에서](https://www.npmjs.com/package/cookie-parser) 확인하자