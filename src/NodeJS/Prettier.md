## ✔ Prettier

<br>

Prettier를 사용해서 이뿌게 서식관리하기

<br>

***npm 을 사용해서 설치하기***


<br>

1.모듈설치

    npm i prettier -D

서비스를 런칭할 때 필요한 모듈이 아니고 개발에 도움을 주는 모듈이기 때문에 -D로(devDependency) 설치

<br>

2.프로젝트 루트 경로에 .prettierrc.js 파일 생성

    touch .prettierrc.js

<br>

3.설정 파일에 (.prettierrc.js) 설정 값 넣기

```js
// .prettierrc.js
 module.exports = {
    trailingComma: 'es5',
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    arrowParens: 'always',
}
```

<br>

4.package.json에 스크립트 추가하기

package.json 내부에 scripts 항목 안에 

    "prettify": "prettier --write *.js **/*.js"

추가하기

<br>

5.스크립트 실행하기

    npm run prettify

```bash
# output
> node_basic_project@1.0.0 prettify
> prettier --write *.js **/*.js

app.js 36ms
config/config.js 5ms
middlewares/authLoginUserMiddleware.js 5ms
middlewares/authMiddleware.js 7ms
middlewares/authUserMiddleware.js 6ms
```

<br>

***

<br>

***VS Code에서 실행하기***

1.Prettier 플러그인 설치

2.스크립트에서 우클릭-문서서식 클릭

3.Prettier 선택

4.스크립트 우클릭 후 문서 서식 클릭하면 서식에 맞게 정렬