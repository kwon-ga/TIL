## JWT 

<br>

간단한 JWT 사용법 예제

<br>

우선 npm에서 jsonwebtoken 라이브러리를 사용한다.

<br>

```zsh
npm init
npm i jsonwebtoken -S
```

<br>

모듈을 철치해주고 아래 코드를 확인한다.

```js
const jwt = require('jsonwebtoken');

const token = jwt.sign({test:true},'my-secret-key'); // 토큰 발행
const errtoken = '1234eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXN0Ijp0cnVlLCJpYXQiOjE2NjUyNDY5NjN9.S7bJDz3IhGFfMbS8c6BiFQz7XBR1U7cvuI4vEhQ7ngE';

// 정상 토큰을 확인하는 경우
let verifyJWT = jwt.verify(token,'my-secret-key');
console.log(verifyJWT);     // { test: true, iat: 1665247263 }

let decodejJWT = jwt.decode(token);    
console.log(decodejJWT);    // { test: true, iat: 1665247263 }


// 변조된 시그니처를 확인하는 경우
verifyJWT = jwt.verify(errtoken,'my-secret-key');
console.log(verifyJWT);      // JsonWebTokenError: invalid token

decodejJWT = jwt.decode(errtoken);
console.log(decodejJWT);     // null

```

<br>

모듈을 불러와서 JWT 토큰을 발행받는다.  
'my-secret-key'를 시크릿 키로 설정해준다.

jwt 토큰을 발행받는 과정에서 시크릿 키는 검증 단계에서 필요한 키이다.  

위 예시를 보면 verify(), decode()를 사용해서 토큰 정보를 확인했는데

이 둘의 차이는 verify()는 시크릿 키를 적용해서 변조된 토큰인지 검증을 한다.

변조된 토큰인 경우에는 JsonWebTokenError: invalid token 에러를 반환하고, 정상 토큰이면 토큰의 복호화 값을 반환한다.


<br>

decode()인 경우에는 시크릿 키를 사용하지 않고 복호화를 시도하는데 유효한 토큰이면 복호화 값을 반환해주고, 유효하지 않은 토큰이면 null을 반환한다.

가장 큰 차이점은 decode()는 토큰을 검증하지 않는다는 점이다.

<br>

***

<br>

이렇게 암호화된 데이터는 클라이언트(브라우저)가 전달받아 쿠키, 로컬스토리지에 저장하여 api 서버에 요청 할 때, 인증 수단으로 사용한다.


