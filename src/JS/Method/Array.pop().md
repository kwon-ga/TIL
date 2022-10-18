## ✔ Array.pop();

<br>
pop 메서드는 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환해준다.
요소를 제거하려는 배열이 빈 배열이면 undefined를 반환해준다.

<br>
pop 메서드는 push, unshift 메서드와 마찬가지로 원본 배열을 직접 변경한다.

<br>

```javascript
// 배열 선언
const arr = ['민수','덕수','길동']

// 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환
let result = arr.pop();
console.log(result); // '길동'

```

