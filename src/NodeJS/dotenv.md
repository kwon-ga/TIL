## ✔ dotenv로 환경변수 등록해서 사용하기 

<br>

기밀 정보(api key, db 정보 등)를 하드코딩으로 작성하거나 Github 가은 오픈 소스에 공개하는 것은 보안상 매우 위험한 일이다.  

이러한 경우를 방지하기 위해 사용하는 것이 dotenv 이다.

dotenv는 .env라는 외부 파일에 중요 정보를 환경 변수로 저장하여 정보를 관리할 수 있게 해준다.

<br>

***

<br>

## ✔ dotenv 설치

<br>

dotenv는 npm과 yarn으로 설치할 수 있다.

```bash
# npm
npm i dotenv

# yarn
yarn add dotenv
```

<br>

## ✔ dotenv 사용하기

<br>

프로젝트의 루트 경로에 ***.env*** 파일을 생성한다.

```bash
touch .env
```

***.env*** 파일에서 환경변수를 정의하는 방법은

### 변수명 = 값
의 모양으로 정의하면 된다.

ex)
```bash
DB_USER = root
DB_PASSWORD = 1111
DB_NAME = Test_DataBase
DB_END_POINT = 127.0.0.1
DB_PORT = 3306
```

이렇게 지정할 수 있다.

이제 저 환경변수들이 사용되는 곳 파일 상단에서 불러오고 사용하면 된다.

```js
// 환경변수 파일 불러오기
require('dotenv').config();

const DB_USER = process.env.DB_USER             // root
const DB_PASSWORD = process.env.DB_PASSWORD     // 1111
const DB_NAME = process.env.DB_NAME             // Test_DataBase
const DB_END_POINT = process.env.DB_END_POINT   // 127.0.0.1
const DB_PORT = process.env.DB_PORT;            // 3306
```

<br>

그리고 .env 파일이 외부로 노출되지 않도록 주의한다.

```bash
# 예시) Github에 노출시키지 않기
# 프로젝트 루트 경로에 아래 명령어 입력
touch .gitignore 

vi .gitignore
```

vi 모드가 열리면 .env 을 입력해주면 깃에서 추척을 하지 않는다.

