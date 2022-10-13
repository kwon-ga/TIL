## ✔ Bcrypt

<br>

## ✔ 암호화란 ?

암호화는 대표적으로 단방향과 양방향 암호 방식이 있다.

단방향 암호 방식은 암호화는 가능하나 복호화는 불가능한 방식이다.  

양방 암호 방식은 암호화가 가능하고 암호화된 문자열을 복호화도 가능하다는 차이점이 있다.


bcrypt는 단방향 키 스트레칭 (Key Stretching)이다.

<br>

## ✔ bcrypt를 사용해서 비밀번호 암호화하기
<br>

```js
const bcrypt = require('bcrypt');

const password = 'qwer1234';

// 비밀번호 암호화 - 비동기 방식으로 콜백을 받는다.
const hashPasswd = bcrypt.hash(password,10,(err, hashCode)=>{
    // async callback    
});

// 비밀번호 비교
let same = bcrypt.compare(password,hashPasswd,(err,result)=>{
    // async callback
})



// 비밀번호 암호화 - 동기 바식으로 데이터를 리턴 받는다.
const hashSyncPasswd = bcrypt.hash(password,10);

// 비밀번호 비교
same = bcrypt.compareSync(password,hashPasswd);
```

Sync가 붙지 않으면 비동기 방식으로 콜백을 받아서 처리한다.

Sync가 붙으면 동기 방식으로 메서드 기능에 맞게 데이터를 리턴을 해준다.

hash 시 인자 값은 saltOrRounds 이고 암호화에 사용할 salt를 몇 번 돌릴지 설정해준다.