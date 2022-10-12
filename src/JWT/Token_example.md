## JWT 예제

<br>
JWT + Bearer 인증 유형은 OAuth 2.0 인증으로 발급한 액세스 토큰이 아니기 때문에 공식적으로는 "비표준" 방식이다.

<br>

```js
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const port = 3000;
const SECRET_KEY = `SeCrEt_KeY`;

app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).send("Hello Token!");
})

let tokenObject = {};


app.get('/set-token/:id',(req,res)=>{
  const id = req.params.id;
  const accessToken = createAccessToken(id);
  const refreshToken = createrRfreshToken();

  tokenObject[refreshToken] = id;
  res.cookie('accessToken',accessToken);
  res.cookie('refreshToken',refreshToken);

  console.log(tokenObject)

  return res.status(200).send('성공스르');

})


app.get('/get-token',(req,res,next)=>{
  const { accessToken, refreshToken } = req.cookies
  // console.log( accessToken, refreshToken )

  // 토큰 보유 여부
  if(!refreshToken) res.status(400).json({'msg':'refreshToken 없음'});
  if(!accessToken ) res.status(400).json({'msg':'accessToken 없음'});

  // 토큰 만료 여부
  const isAccessTokenValidate = validateAccessToken(accessToken);
  const isRefreshTokenValidate = validateRefreshToken(refreshToken);

  // Refresh Token 만료여부
  if (!isRefreshTokenValidate) return res.status(419).json({ "message": "Refresh Token이 만료되었습니다." });

  if(!isAccessTokenValidate){
    const accessTokenId = tokenObject[refreshToken];
    if(!accessToken) res.status(419).json({'msg':"Refresh Token의 정보가 서버에 존재하지 않습니다."});

    const newAccessToken = createAccessToken(accessTokenId);
    res.cookie('accessToken',newAccessToken);
    return res.send('새로운 access token 발급 완료');
  }
  
  const id = getAccessTokenPayload(accessToken).id
  console.log(id)
  return res.json({'msg':'토큰 인증 완료'})
})


// Access Token 발급
function createAccessToken(id){
  const accessToken = jwt.sign(
    {id:id},
    SECRET_KEY,
    {expiresIn : '5s'});

    // console.log(accessToken);
    return accessToken
}

// Refresh Token 발급
function createrRfreshToken(){
  const refreshToken = jwt.sign(
    {},
    SECRET_KEY,
    {expiresIn : '7d'});

    // console.log(refreshToken);
    return refreshToken
}

// Access Token 검증
function validateAccessToken(accessToken) {
  try {
    jwt.verify(accessToken, SECRET_KEY); // JWT를 검증합니다.
    return true;
  } catch (error) {
    return false;
  }
}

// Refresh Token 검증
function validateRefreshToken(refreshToken) {
  try {
    jwt.verify(refreshToken, SECRET_KEY); // JWT를 검증합니다.
    return true;
  } catch (error) {
    return false;
  }
}

// Access Token Payload 출력
function getAccessTokenPayload(accessToken) {
  try {
    const payload = jwt.verify(accessToken, SECRET_KEY); // JWT에서 Payload를 가져옵니다.
    return payload;
  } catch (error) {
    return null;
  }
}


function testToken(){
    // const token = jwt.sign({test:true},'SECRET_KEY');
    // const errtoken = '1234eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXN0Ijp0cnVlLCJpYXQiOjE2NjUyNDY5NjN9.S7bJDz3IhGFfMbS8c6BiFQz7XBR1U7cvuI4vEhQ7ngE';

    // // 정상 토큰을 확인하는 경우
    // let verifyJWT = jwt.verify(token,'SECRET_KEY');
    // console.log(verifyJWT);     // { test: true, iat: 1665247263 }

    // let decodejJWT = jwt.decode(token);    
    // console.log(decodejJWT);    // { test: true, iat: 1665247263 }


    // // 변조된 시그니처를 확인하는 경우
    // verifyJWT = jwt.verify(errtoken,'SECRET_KEY');
    // console.log(verifyJWT);      // JsonWebTokenError: invalid token

    // decodejJWT = jwt.decode(errtoken);
    // console.log(decodejJWT);     // null
}

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
})
```

<br>

1. 전달받은 id로 access, refresh 토큰 발급
2. refresh 토큰은 db 저장이 아닌 객체로 임시 저장
3. access 토큰의 유효 기간이 5초 이므로 5초 후에 '/get-token' 호출
4. access 토큰 만료를 확인하고 refresh 토큰을 받아와서 객체에 저장된 데이터를 찾아온 데이터로 access 토큰 재발급