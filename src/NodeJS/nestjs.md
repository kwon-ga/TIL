## ✔ Nest JS

<br>

### ✔ Nest JS란 ?

<br>

node js 기반의 프레임워크이며 Express 위에서 동작한다.

node js 는 자유로운 규격을 가지고 있으나 Nest JS는 규격화된 구조가 있디.

nest js 는 100% TypeScript를 지원한다.

<br>

### ✔ Nest JS 시작하기

<br>

```
npm i -g @nestjs/cli
nest new project-name
```

nest js cli를 사용해서 새로운 프로젝트를 생성한다.

<br>

nest js의 폴더 구조

```
src
├── auth
│   ├── decorators
│   ├── dtos
│   ├── exceptions
│   ├── guards
│   └── interfaces
├── common
│   ├── decorators
│   ├── dtos
│   ├── entities
│   ├── exceptions
│   ├── helpers
│   └── interfaces
├── config
│   ├── app
│   ├── database
│   │   └── mysql
│   └── jwt
├── database
│   ├── migrations
├── modules
│   ├── item
│   │   ├── brands
│   │   │   ├── entities
│   │   │   ├── interfaces
│   │   │   └── repositories
│   │   └── items
│   │       ├── entities
│   │       ├── interfaces
│   │       └── repositories
│   └── user
│       └── users
│           ├── entities
│           ├── interfaces
│           └── repositories
├── providers
|   ├── aws
│   │   ├── s3
│   │   └── sqs
|   ├── cache
│   │   └── redis
│   ├── database
│   │   └── postgres
│   └── elasticsearch
│       ├── helpers
│       └── types
├── app.controller.ts
├── app.module.ts
└── main.ts
```

<br>

### ✔ Nest JS - 기본 구조

<br>

|파일명|설명|
|:---:|:---:|
|eslintrc.js|타입스크립트를 쓰는 가이드 라인 제시, 문법 오류가 나면 알려주는 역할|
|ptrettierrc|코드의 형식을 통일할 때 사용한다. 코드 포맷터 역할|
|nest-cli.json|nest 프로젝트를 위해 특정한 설정을 할 수 있는 json 파일|
|tsconfig.json|타입스크립트 컴파일 설정 파일|
|src|main.ts : 앱을 생성하고 실행|
|src|app.module.ts : 앱 모듈을 정의|


<br>

### ✔ Nest JS - 데코레이터

<br>

nest는 데코레이터를 적극 활용한다.

타입스크립트의 데코레이터는 파이썬의 데코레이터나 자바의 어노테이션과 유사한 기능을 한다.

클래스, 메서드, 접근자, 프로퍼티, 매개변수에 적용이 가능하다.

쉽게 생각하면 클래스 위의 함수이고, 클래스를 위해 움직인다고 생각하면 편하다.

*데코레이터와 함수 사이에 공백이 존재하면 안된다.

<br>

```ts
// 데코레이터 예시 (app.module.ts)
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
```

<br>

### ✔ Nest JS - Controller

<br>

컨트롤러는 url을 가져오고 함수를 실행하는 역할을 한다.

express의 router 같은 존재이다.


<br>

### ✔ Nest JS - Service

<br>

nest는 컨트롤러와 비즈니스 로직을 구분한다.

컨트롤러는 그저 url을 가져오고 함수를 실행시키는 역할일 분 진짜 비즈니스 로직은 Service에 존재한다.

<br>

### ✔ Nest JS - Providers

<br>

프로바이더는 Nest JS의 개본 개념이다. 대부분 기본 Nest 클래스는 서비스, 리포지토리, 팩토리, 헬퍼 등 프로바이더로 취급될 수 있다.  

프로바이더의 주요 아이디어는 종속성으로 주입할 수 있다는 것이다.

즉, 객체는 서로 다양한 관계를 만들 수 있으며 객체의 인스턴스를 연결하는 기능은 대부분 Nest 런타임 시스템에 위임될 수 있다.


@Request()	req
@Response(), @Res()*	res
@Next()	next
@Session()	req.session
@Param(key?: string)	req.params / req.params[key]
@Body(key?: string)	req.body / req.body[key]
@Query(key?: string)	req.query / req.query[key]
@Headers(name?: string)	req.headers / req.headers[name]
@Ip()	req.ip
@HttpCode(status:number)	 

엘라스틱서치

took	Elasticsearch가 검색을 실행하는 데 걸린 시간(밀리초)
timed_out	검색의 시간 초과 여부
shards	검색한 샤드 수 및 검색에 성공/실패한 샤드 수
hits	검색 결과
hits.total	검색 조건과 일치하는 문서의 총 개수
hits.hits	검색 결과의 실제 배열(기본 설정은 처음 10개 문서)
hits.sort	결과의 정렬 키(점수 기준 정렬일 경우 표시되지 않음)
max_score	매칭에 성공한 도큐먼트중 가장 높은 점수