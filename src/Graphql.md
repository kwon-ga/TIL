## ✔ GraphQL

<br>

### ✅ GraphQL

<br>

### REST api vs GraphQL

<br>

REST api 

: 리소스를 얻기 위해 특정 URL로 요청하여 리소스를 받아온다.   
주로 HTTP 메서드와 함께 사용하고 매우 직관적이며 유추하기 쉽다.  
URL로 리소스의 위치를 나타내고 HTTP Method가 작업의 유형을 나타낸다.
리소스의 크기와 형태를 서버에서 결정한다.

REST API는 하나의 endpoint로 필요한 모든 데이터 요청을 처리하지 못한다. (Under Fetching)  
API의 호출 횟수가 증가한다는 문제가 있다.

또한 endpoint로 요청하여 응답 받는 정보가 사용하지 않는 불필요한 데이터를 담고 있다. (Over Fetching)  
이는 필요없는 데이터를 전송하기 때문에 리소스 낭비로 이어질 수 있다는 문제가 있다.

<br>

GraphQL

: GraphQL 에서는 위에 언급했던 Under Fetching, Over Fetching의 문제를 해결한 api용 쿼리 언어라고 할 수 있다.

GraphQL은 리소스에 대한 정보만 정보만 정의하고, 필요한 크기와 형태는 클라이언트 측에서 결정한다.  
또한 GraphQL은 한 번의 요청에서 여러 리소스에 접근하여 데이터를 받아올 수 있다.
