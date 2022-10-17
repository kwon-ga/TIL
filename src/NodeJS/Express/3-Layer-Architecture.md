## ✔ 3-Layer-Architecture

<br>

### ✔ 3-Layered Architectur의 3가지 처리과정

<br>

1. Controlle : 어플리케이션의 가장 바깥 부분, 요청/응답을 처리함.  
    👉 클라이언트의 요청을 처리 한 후 서버에서 처리된 결과를 반환해주는 역할  

     
2. Servic : 어플리케이션의 중간 부분, 실제 중요한 작동이 많이 일어나는 부분  
  👉 아키텍처의 핵심적인 비즈니스 로직이 수행되는 부분
  
3. Repositor : 어플리케이션의 가장 안쪽 부분, DB와 맞닿아 있음.  
    👉 실제데이터베이의 데이터를 사용하여 CRUD 작업을 수행하는 부분

<br>

### ✔ 3-Layered Architectur Flow

<br>

1.클라이언트(Client)가 요청(Request)을 보낸다.

2.요청(Request)을 URL에 알맞은 컨트롤(Controller)가 수신 받는다.  

3.컨트롤(Controller)는 넘어온 요청을 처리하기 위해 서비스(Service)를 호출한다.

4.서비스(Service)는 필요한 데이터를 가져오기위해 저장소(Repository)에게 데이터를 요청한다.  

5.서비스(Service)는 저장소(Repository)에서 가져온 데이터를 가공하여 컨트롤(Controller)에게 데이터를 넘긴다.

6.컨트롤(Controller)는 서비스(Service)의 결과물(Response)을 클라이언트(Client)에게 전달한다.  

<br>

***

<br>

### ✔ Express 에서 적용해보기

<br>

프로젝트 구성 예시

```text
내 프로젝트 폴더 이름 (express, sequelize)
├── app.js
├── config
│   └── config.json
├── controllers
│   └── controller.js
├── migrations
├── models
│   └── index.js
├── repositories
│   └── repository.js
├── routes
│   └── index.js
├── services
│   └── service.js
├── package.json
└── package-lock.json
```