## Array.shift();

<br>

shift 메서드는 원본 배열 첫 번째 요소를 제거하고 제거한 요소를 반환한다.
요소를 제거하려는 배열이 빈 배열이면 undefined를 반환해준다.

shift 메서드는 push, unshift, pop 메서드와 마찬가지로 원본 배열을 직접 변경한다.

<br>

```javascript
// 배열 선언
const arr = ['하나','둘','셋','넷'];

// 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환
let result = arr.shift();
console.log(result); // '하나'
```