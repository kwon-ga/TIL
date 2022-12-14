## Hoisting과 TDZ

</br>
변수 선언의 실행 시점과 변수 호이스팅

</br>
자바스크립트 코드는 인터프리터에 의해 한 줄씩 순차적으로 실행된다.
 
 이를 런타임이라고 한다.  
다만, 변수의 선언이 실행되는 시점은 런타임이 아니라 런타임 전 시점에 실행된다.

</br>

```js
console.log(aaa); // undefined
let aaa ;
```

자바스크립트 엔진은 런타임 전 소스코드의 평가 과정을 거치면서 런타임 준비를 한다.
평가 과정에서 모든 식별자를 찾아내서 먼저 실행한다.  

평가 과정이 끝나면 런타임 시점으로 넘어가서 코드를 한 줄씩 순차적으로 실행한다.  
(변수의 할당은 이 시점에 실행)

</br>

이처럼 변수의 선언이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을
변수 호이스팅이라고 한다.

= 변수의 선언 시점이 런타임 시점보다 먼저 동작하는 자바스크립트 고유의 특징을 변수 호이스팅이라고 한다.

</br>


```js
console.log(test);  // undefined

test = 80;
var test;

console.log(test); // 80

/* 
위 예제의 경우 aaa의 변수는 undefined가 저장되어있던 메모리 공간을 지우고 그 메모리에 80을 저장하는게 아니다.

1. test 변수 선언 (undefined 값 할당)
2. 순차적으로 코드 실행
3. (1)에서는 undefined 출력
4. (3)에서 test에 80값을 할당 (새로운 메모리 공간을 확보하고 그곳에 할당된 값을 저장)
5. (4)의 변수의 선언은 런타임 전에 실행된다. 
6. (6)에서 80을 출력
*/
```

<br>

***

<br>

## 값의 재할당

<br>

값을 재할당은 var과 let에서 가능하며
var은 중복 선언과 재할당이 가능하나, let는 중복 선언은 불가능 하지만 재할당은 가능하다.

*처음 값을 할당할때 var은 선언과 동시에 undefined로 초기화 되기 때문에 재할당이라고 할 수 있다.

 하지만 let는 선언과 동시에 undefined로 초기화 하지 않는다.

변수 값을 재할당 하지 못하는 경우는 상수라고 한다.  
다시말해 상수는 단 한 번만 할당할 수 있는 변수이다.

<br>

***

<br>

## TDZ는 뭘까?

<br>

var 키워드로 선언하는 변수와 달리 let 키워드로 선언한 변수는 호이스팅이 발생하기 않는 것처럼 동작한다.
<br>

```js
console.log(score); 	// undefined
var score ; 			// 변수 선언

console.log(foo);		// Uncaught ReferenceError: foo is not defined
let foo ;				// 변수 선언

```
## 왜그럴까 ?

<br>

var 키워드로 선언한 변수는 런타임 이전에 자바스크립트 엔진에 의해 undefined 로
선언과 초기화가 한번에 진행된다.

하지만 let 키워드로 선언한 변수는 선언과 초기화가 분리되어 진행된다.  
즉, 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 선언 단계가 먼저 실행되지만
초기화 단계는 런타임 이후 인터프리터에 의해 함수 선언문에 도달했을 때 실행된다.

<br>

***

||런타임 이전 변수 선언 단계|런타임 단계 (인터프리터의 순차적 코드 실행)|
|:---:|:---:|:---:|
|var로 선언|선언과 동시에 undefined로 초기화|-|
|let로 선언|변수 선언 (초기화 x)|함수 선언문에 의한 변수 초기화|

***
<br>
위 표를 참고하면 let로 선언 시 변수 선언 후 초기화 지점까지 변수를 참조할 수 없는 구간을 일시적 사각지대 (TDZ) 라고 부른다.
