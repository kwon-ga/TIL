## package.json

<br>

package.json의 구조를 살펴보자

```js
//package.json
{
  "dependencies": {
    "cookie-parser": "^1.4.6",
    "express": "^4.18.1",
    "jsonwebtoken": "^8.5.1",
    "pm2": "^5.2.0"
  },
  "name": "jwt",
  "version": "1.0.0",
  "main": "app.js",
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

<br>

package.json은 프로젝트 정보와 의존성(dependencies)을 관리하는 문서이다.  


이미 작성된 package.json 문서는 어느 곳에서도 동일한 개발 환경을 구축할 수 있게 해준다.  


JSON 포맷으로 작성해야 하며, 아래와 같은 옵션이 있다.

<br>

***

<br>

### name

<br>

URL 혹은 Command Line의 일부로 사용될 패키지의 이름이다.

간결하고 직관적인 이름으로 설정하며, 다른 모듈과 동일한 이름은 피할 것을 권장한다.

<br>

***

<br>

### version

<br>

[SemVer(The semantic versioner for npm)](https://www.npmjs.com/package/semver)으로 분석이 가능한 형태의 버전을 지정한다.

<br>

***

<br>

### description

<br>

패키지의 설명을 지정한다.

<br>

***

<br>

### keywords

<br>

패키지의 키워드를 배열의 형태로 지정해준다.

<br>

***

<br>

### homepage

<br>

프로젝트의 홈페이지로 연결되는 URL을 지정해준다.

<br>

***

<br>

### bugs

<br>

패키지에 문제가 있을때 제출할 URL 혹은 이메일 주소를 지정한다.

<br>

***

<br>

### license

<br>

패키지 사용을 허용하는 방법과 제한 사항을 알 수 있도록 라이센스를 지정한다.

<br>

***

<br>

### author

<br>
제작자의 이름을 지정한다.

<br>

***

<br>

### files

<br>
패키지가 의존성으로 설치될 때 같이 포함될 파일들의 배열을 지정해준다.
<br>

***

<br>

### main

<br>

프로그램의 기본 진입 포인트를 지정해준다.

<br>

***

<br>

### repository

<br>

프로젝트의 코드가 존재하는 장소를 지정해준다.

<br>

***

<br>

### script

<br>

패키지 라이프 사이클에서 여러번 실행되는 스크립트 명령을 지정해준다.

<br>

***

<br>

### dependencies

<br>

패키지 배포 시 포함될 의존성 모듈을 지정해준다.

<br>

***

<br>

### devDependencies

<br>
패키지 개발 단계에서 사용될 의존성 모듈을 지정해준다.

<br>

***

<br>

### peerDependencies

<br>

패키지의 호환성 모듈을 지정한다.

<br>

***

<br>

### bundleDependencies

<br>

패키지를 게시할 때 번들로 묶을 패키지 이름을 배열로 지정한다.

<br>

***

<br>

### optionalDependencies

<br>
npm을 찾을 수 없거나 설치에 실패한 경우 계속 진행하려면 optionDependencies 객체에 넣을 수 있다.  


dependencies 동일하게 배포 시 포함될 의존성 모듈을 지정하지만,  
 빌드 실패로 인해 설치 과정이 중단되지 않는다.
<br>

***

<br>

### engines

<br>
패키지가 작동하는 Node 버전을 지정한다.
<br>

***

<br>

### private

<br>
개인 저장소의 우연한 발행을 방지하기 위해 npm에서 패키지의 공개 여부를 지정한다.


<br>

