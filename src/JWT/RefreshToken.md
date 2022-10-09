## Refresh Token

<br>

Access Token (JWT)를 통한 인증 방식의 문제는 제 3자에게 탈취당할 경우 보안에 매우 취약하다.

이를 방지하기 위해 유효기간을 짧게 설정하면 클라이언트는 그만큼 로그인을 자주 해줘야하고, 서버도 자주 토큰발급을 해줘야해서 불편하다.

그렇다고 유효기간을 늘리면 토큰을 탈취당했을 때 보안에 더 취약하다.

이를 해결하기 위해 나온 방법이 Refresh Token이다.

<br>

***

<br>

Refresh Token은 Access Token과 똑같은 JWT 토큰이다.

처음에 로그인을 완료하면, Access Token과 동시에 발급되는 Refresh Token은 긴 유효기간을 가지면서,

Access Token이 만료되면 새로 발급해주는 열쇠가 된다.  
*여기서 만료라는 개념은 유효기간이 지난 것을 의미한다.

또한 Access Token은 탈취당하면 정보가 유출되는건 동일하다.
다만 유효기간이 짧은 것을 쓰는게 더 안전하다는 말이다.

<br>

***

<br>

Refresh Token과 Access Token을 사용한 로그인 예시

<br>

![][def]

[def]: ../img/token_login.png

1. 클라이언트가 ID / PW를 통해 로그인을 요청한다.

2. 서버는 회원 정보를 받아서 DB와 비교한다.

3. 로그인이 완료되면 Access, Refresh Token을 발급한다. 

4. 서버는 Refresh Token을 회원 DB에 저장한다.

5. 사용자는 Access Token을 안전한 저장소 (세션 스토리지, 로컬 스토리지 등 ..)에 저장하고 요청 시에 헤더에 Access Token을 담아서 보낸다.

6. Access Token을 검증하여 이에 맞는 데이터를 반환해준다.

7. 위 사이클을 반복하다가 Access Token이 만료된다. (유효기간이 끝난다.)

8. 사용자는 만료된 토큰을 헤더에 담아서 요청을 보낸다.

9. 서버는 Access Token이 만료됨을 확인하고 권한 없음을 반환한다.

10. 사용자는 Refresh Token과 Access Token을 함께 서버로 보낸다.

11. 서버는 Access Token의 조작여부를 확인하고 Refresh Token과 4번에서 저장한 Refresh Token을 비교해서 토큰 데이터와 만료 기간을 확인한 후에 Access Token을 발급한다.

12. 사용자는 새로운 Access Token을 헤더에 실어 다시 api 요청을 한다.


<br>

Access Token만 사용하는 방식 보다는 훨씬 안전하다.  
하지만 그만큼 구현이 복잡하다는 단점이 있다.