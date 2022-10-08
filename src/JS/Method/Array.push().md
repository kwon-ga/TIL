## Array.push();

<br>
.push() 메서드는 인수로 전달받은 모든 값을 원본 배열 마지막 요소로 추가하는 역할을 한다.<br>
.push()의 반환 값은 요소를 추가한 후 변경된 length 프로퍼티 값을 반환한다.

<br>

```javascript
// 배열 선언
const arr = [1,2];

// push 메서드를 통해 기존 배열에 요소를 추가하고 result 변수에 값을 넣어준다.
let result = arr.push(3,4,5,6,7,8); 

// arr.push(...) 의 리턴 값 확인 
console.log(result); // 8

// arr 배열 요소 확인, 원본 배열을 직접 변경하는 것을 확인할 수 있다.
console.log(arr) // [1,2,3,4,5,6,7,8]
```
<br>

***

<br>
push 메서드는 성능 면에서 좋지 않다. 마지막에 추가할 요소가 하나뿐이라면 push 메서드 대신 length 프로퍼티를 사용하여 배열의 마지막 요소를 직접 추가하는 방법도 있다.

<br>

```javascript
// 배열 선언
const arr = [1,2];

// arr.push() 와 동일한 처리를 한다.
arr[arr.length] = 3;
console.log(arr); // [1,2,3]

```

속도 측면에서 보면 위 방법이 더 빠르다.   
~~진짜 빠르다고는 하는데 나는 못 느끼겠다.~~


<br>

***

<br>

push 메서드는 원본 배열을 직접 변경하는 부수 효과가 있다.  
원본을 변경해서 예상하지 못한 위험을 줄이기 위한 방법도 있는데
ES6의 스프레드 문법을 사용하는 것이다.

```javascript
// 배열 선언
const arr = [1,2];

// ES6 스프레드 문법을 사용한 배열 요소 추가
let newArr = [...arr,3,4];
console.log(newArr); // [1,2,3,4]

```
이 방법은 함수의 호출 없이 요소를 추가할 수 있으며,  
원본이 변경되어 발생하는 위험도 적다.