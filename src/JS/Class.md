## 클래스(class) 란?

<br>
클래스는 객체를 생성하기 위한 템플릿이다.  

클래스는 데이터와 이를 조작하는 코드를 하나로 추상화한다.

<br>
class는 특별한 함수라고 생각할 수 있다.  

함수는 함수 표현식과 함수 선언으로 정의할 수 있듯
class 또한 class 표현식, class 선언으로 정의할 수 있다.

<br>
아래의 예시를 확인해보자

<br>

```js
class User {
  	constructor(name, age, tech, height) { // User 클래스의 생성자
    	this.name = name;
    	this.age = age;
    	this.tech = tech;
	    this.height = height;
  	}
}

// user 인스턴스 생성
const user_kwonga = new User("kwonga", 50, "Node",250); 
const user_son = new User("son", 150, "express",550);

console.log(user_kwonga); // User {name: 'kwonga', age: 50, tech: 'Node', height: 250}
console.log(user_son); // User {name: 'son', age: 150, tech: 'express', height: 550}

```

User 클래스는 빵틀이고 user_kwonga, user_son은 빵이라고 생각하면 이해가 편하다.

User 이라는 빵틀에 각기 다른 재료 (name, age, tech, height)를 넣고 구워버린 빵이 user_kwonga, user_son ( User 인스턴스 )이다.

또한 클래스 내부의 constructor()로 정의한 메서드는 객체의 초기 값을 지정하기 위해서 객체가 생성될 때 실행되기로 약속된 함수이다.

자바스크립트는 객체를 생성할때 자동으로 constructor 함수를 호출한다.

<br>

***

<br>

### 메서드 (Method)

<br>

자바스크립트에서 사용할 수 있는 모든 값들은 프로퍼티 값으로 사용할 수 있다.

프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 메서드라는 용어로 부른다.

즉, 메서드는 객체의 속성 중 함수를 의미하는 표현이다.

<br>

```js
class User {
  	constructor(name, age, tech, height) { // User 클래스의 생성자
    	this.name = name;
    	this.age = age;
    	this.tech = tech;
	    this.height = height;
  	}
  
 	getName() { return this.name }
  	getAge() { return this.age }
  	getTech() { return this.tech }
  	getHeight() { return this.height }
}

// user 인스턴스 생성
const user_kwonga = new User("kwonga", 50, "Node",250);


console.log(user_kwonga.getName());		// kwonga
console.log(user_kwonga.getAge());		// 50
console.log(user_kwonga.getTech());		// node
console.log(user_kwonga.getHeight());	// 250
```
객체 내부의 메서드를 선언하고 호출하는 예제이다.

<br>

***

<br>

### 상속이란 ?

<br>

상속받는 클래스는 부모 클래스의 메서드, 내부 변수와 같은 정보를 받아올 수 있다.

위 예제에서 나온 User 클래스를 상속받는 자식 클래스를 만들어본다.
```js
// 부모 클래스
class User {
  	constructor(name, age) {
    	this.name = name;
    	this.age = age;
  	}
  
	getName() { return this.name }
  	getAge() { return this.age }
}

// 자식 클래스
class Detail extends User {
  	// 자식 클래스 생성자
	constructor (name, age, tech, height){
		super(name,age);
      	this.tech = tech;
      	this.height = height;
    }
}

// 자식 클래스 인스턴스 생성
let kwonga2 = new Detail('kwonga2',30,'node',150)


console.log(kwonga2); // Detail {name: 'kwonga2', age: 30, tech: 'node', height: 150}

// 부모 클래스의 메서드를 참조해서 정상 출력된다.
console.log(kwonga2.getName()); // kwonga2
```
