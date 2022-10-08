## callback이란 ?
<br>
다른 함수에서 입력값으로 전달되어 다른 함수에 의해서 나중에 호출되는 함수이다.

아래 예시를 보면

<br>

```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

let length = (element) => element.length > 6 ;

const result = words.filter(length);

console.log(result);
// Array ["exuberant", "destruction", "present"]

```

<br>

word array에서 filter 함수를 사용하려고 할 때 인자 값으로 length 함수를 받고 있다. <br>

*filter 함수의 첫번째 인자 값은 callback 함수이다. [\[참고\] array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

이처럼 filter 함수에 의해 나중에 호출되는 함수 length는 callback 함수라고 할 수 있다.

대부분은 callback 함수 자리에 익명함수를 넣어주는 경우가 많다.

<br>

```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(e => e.length > 6 );

console.log(result);
// Array ["exuberant", "destruction", "present"]
```
