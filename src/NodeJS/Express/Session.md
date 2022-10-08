## 세션 만들기 예제

<br>

쿠키의 경우 서버를 재시작하거나 웹브라우저를 새로고침 하더라도 로그인이 유지된다.

클라이언트 입장에서는 편하게 사용이 가능하지만 서버와 보안적으로 위험할 수도 있다.

그래서 쿠키에는 사용자를 구분할 수 있는 정보를 넣고 통신하면 서버에서는 그 구분 값을 받아서 중요한 데이터를 반환할 수 있다.

api를 호출했을 때 쿠키의 시간 정보를 사용해서 서버에 저장된 name 값을 출력하도록 만들어보자

<br>

```js
let session = {};

app.get('/set-session', (req, res, next) => {
    const name = 'sparta';
    const uniqueInt = Date.now();
    session[uniqueInt] = { name };

    console.log(uniqueInt);             // 1665231004100
    console.log(session[uniqueInt]);    // { name: 'kim' }

    res.cookie('sessionKey', uniqueInt);
    return res.status(200).end();
});

```

<br>

서버에서 유저의 정보를 저장하기 위해 session 객체를 만들어주고
요청 받은 시간을 세션의 키, name를 값으로 세션 객체에 저장해준다.   
그리고 쿠키에는 세션 키를 담아서 반환해준다.

<br>

세션에 저장된 name 값을 출력해보자

```js
app.get('/get-session', (req, res, next) => {
  const { sessionKey } = req.cookies;
  const name = session[sessionKey];
  console.log(name); // { name: 'kim' }
  return res.status(200).json({ name });
});
```