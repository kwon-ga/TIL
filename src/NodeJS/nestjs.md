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

