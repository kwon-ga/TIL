## ✔ JSON.parse()

<br>

JSON.parse() 메서드는 JSON 문자열의 구문을 분석하고, 그 결과로 JSON 객체를 반환한다.

```js
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

```

문자열이 json 형식을 가지고 있으면 이를 JSON 객체로 반환한다.

```js
let str = '{'+'"todoId": 23,"content": "반가워요3","done": 0'+'}'

const obj = JSON.parse(str);
console.log(obj.todoId);
// expected output: 23

```