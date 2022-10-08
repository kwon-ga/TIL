## Express js

<br>

express의 [공식홈페이지에서는](https://expressjs.com/ko/) express를
"Node.js를 위한 빠르고 개방적인 간결한 웹 프레임워크"라고 소개하고 있다.  
즉, node js로 서버를 빠르고 간편하게 만드는 것을 돕는 웹 프레임워크이다.

Express는 웹서버 자체가 아니라 node js로 웹 서버를 만드는 것을 도와주는 프레임워크 임을 기억하자 !

<br>

*일반 웹 서버 vs node js로 만든 웹 서버
 
일단 일반적인 웹 서버와 node js로 만든 웹 서버는 다르지 않다.  

어떤 도구를 사용해서 만들었는지의 차이이다.  

일반적인 웹 서버와 
동일한 기능을 수행하는 웹 서버를 만들 수 있으며,
이는 node js를 포함한 다른 언어나 도구로 만드는 웹 서버도 동일하다.

<br>

***

<br>

### Express를 이용해서 웹 서버를 구현해보자 !

<br>

*에디터는 vscode를 사용했습니다!

1. node js 설치
2. 프로젝트 생성 
3. 콘솔/터미널로 워크스페이스에 접근 후 'npm init -y' 입력
-> package.json 파일이 생성되었는지 확인한다.
4. npm을 통해 express를 다운받는다. 'npm install express' 입력
5. package.json에 dependencies : { "express" ... } 이 추가되었으면 성공 !
6. app.js 생성
7. express [공식홈페이지](https://expressjs.com/en/starter/hello-world.html)를 참고하여 app.js 기본 세팅 ! 

<br>

```js
const express = require('express')
const app = express()
const port = 3000 // 3000번 포트를 사용하겠습니다잉 이라는 뜻

app.get('/', (req, res) => {
  res.send('Hello World!') 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

<br>

1. 콘솔/터미널로 프로젝트에 접근해서 app.js 파일 실행 'node app.js' 입력
2. 브라우저를 열고 http://localhost:3000/ 로 접근하여 'Hello World!' 출력되면 성공 !
