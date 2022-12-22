## ✔ Module

<br>

### ✔ 모듈이란 ?

<br>

애플리케이션을 구성하는 개별적 요소로서 재사용 가능한 코드 조각을 말한다.

일반적으로 모듈은 기능을 기준으로 파일 단위로 분리한다.

이때 모듈이 성립하려면 모듈은 자신만의 파일 스코프 (=모듈 스코프)를 가질 수 있어야 한다.

자신만의 파일 스코프를 갖는 모듈의 구성 (모듈에 포함되어있는 변수, 함수, 객체 등)은 기본적으로 비공개 상태다.

이는 자신만의 파일 스코프를 갖는 모듈의 모든 자산은 캡슐화되어 다른 모듈에서 접근할 수 없다.

즉, 모듈은 개별적 존새로서 애플리케이션과 분리되어 존재한다는 뜻이다.

하지만 애플리케이션과 완전히 분리되어 개별적으로 존재하는 모듈은 재사용이 불가능하므로 존재의 의미가 없다.

모듈은 애플리케이션이나 다른 모듈에 의해 재사용되어야 의미가 있다. 

<u>그래서 모듈은 공개가 필요한 구성에 한정하여 명시적으로 선택적인 공개가 가능한데,
이를 export라고 한다.


위와 같이 공개된 모듈의 일부 혹은 전체를 선택해 자신의 스코프로 불러들여 사용할 수 있는데 이를 import라고 한다.</u>

<Br>

___

<Br>

### ✔ ES6 Module

<br>

```html
<script type="module" src="module path"></script>
```

ES6 모듈(=ESM)은 스크립트 태그에 type="module"을 명시하여 로드된 자바스크립트 파일을 모듈로서 동작시키게 한다.

일반적인 자바스크립트 파일이 아닌 ESM을 명확하게 하기 위해 확장자는 .mjs를 사용해준다.

ESM은 파일 자체의 독자적인 모듈 스코프를 제공한다. 따라서 모듈 내에서 선언한 변수는 더는 전역변수가 아니며 window 객체의 프로퍼티도 아니다.

<Br>

***

<Br>

### ✔ export 키워드

<br>

모듈 내부에서 선언한 모든 식별자는 기본적으로 해당 모듈 내부에서만 참조할 수 있다. 

모듈 내부에서 선언한 식별자를 외부에 공개하여 다른 모듈들이 재사용하게 하려면 export 키워드를 사용해야한다.

export 키워드는 선언문 앞에 사용한다. 

```js
// 변수 공개
export const pi = Math.PI;

// 함수 공개
export function square(x){
    return x * x ;
}

// 클래스 공개
export calss Person {
    constructor(name) {
        this.name = name ;
    }
}

// 변수 함수 클래스를 하나의 객체로 구성하여 공개
export { pi, square, Person };
```

<Br>

***

<Br>

### ✔ import 키워드

<br>

다른 모듈에서 공개한 식별자를 자신의 모듈 스코프 내부로 로드하려면 import 키워드를 사용한다.

다른 모듈이 export한 식별자 이름으로 import해야 하며 ESM의 경우 파일 확장자를 생략할 수 없다.

```js
import { pi, square, Person } from './path'
```

```html
<!DOCTYPE html>
<html>
<body>
    <script type="module" src="path"></script>
</body>
</html>
```

모듈이 export 한 식별자 이름을 일일이 지정하지 않고 하나의 이름으로 한 번에 import 할 수도 있다.

```js
import * as lib from 'path';

console.log(lib.pi);
console.log(lib.square(10));
console.log(new lib.Person('Lee'));
```

모듈에서 하나의 값만 export 한다면 default 키워드를 사용할 수 있다.

default 키워드를 사용하는 경우 기본적으로 이름 없이 하나의 값을 export 하며

var, let, const 키워드는 사용할 수 없다.

```js
export default x => x * x ;

export default let foo = () => {}; // SyntaxError
// export default () => {}; 
```

default 키워드를 사용한 모듈은 {} 없이 임의의 이름으로 import 한다.

```js
import name from 'path';
```


<Br>

***

<Br>

### ✔ commonjs

<br>

✔ Definition  :  모듈 정의는 exports 객체를 이용한다.

```js
var a = 5;
var b = 7;

exports.sum = function(num1, num2){
  return a + b + num1 + num2;
};
```

<br>

✔ Usage  :  모듈 사용은 require 함수를 이용한다.

```js
var a = 10;
var b = 1;

var moduleA = require("fileA");

moduleA.sum(a, b); 
```