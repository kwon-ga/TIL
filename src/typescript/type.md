## ✔ Type Script 의 타입

<br>


### 불린: Boolean

<br>

단순한 참(true) / 거짓(false) 값을 나타낸다.

```typescript
let isBoolean: boolean;
let isDone: boolean = false;
```

<br>


### 숫자: number

<br>

모든 부동 소수점 값을 사용할 수 있다.  
ES6에서 도입된 2진수 및 8진수 리터럴도 지원한다.

```typescript
let num: number;
let integer: number = 6;
let float: number = 3.14;
let hex: number = 0xf00d; // 61453
let binary: number = 0b1010; // 10
let octal: number = 0o744; // 484
let infinity: number = Infinity;
let nan: number = NaN;
```

<br>

### 문자열: String

<br>

문자열을 나타낸다.  
작은따옴표( ' ' ), 큰따옴표 ( " " ), 템플릿 리터렬도 지원한다.

```typescript
let str: string;
let red: string = 'Red';
let green: string = "Green";
let myColor: string = `My color is ${red}.`;
let yourColor: string = 'Your color is' + green;
```

<br>

### 배열: Array

<br>

순차적으로 값을 가지는 일반 배열을 의미한다.

배열은 두 가지 방법으로 타입을 선언할 수 있다.

```typescript
// 문자열만 가지는 배열
let fruits: string[] = ['Apple', 'Banana', 'Mango'];
// Or
let fruits: Array<string> = ['Apple', 'Banana', 'Mango'];

// 숫자만 가지는 배열
let oneToSeven: number[] = [1, 2, 3, 4, 5, 6, 7];
// Or
let oneToSeven: Array<number> = [1, 2, 3, 4, 5, 6, 7];
```

여러가지 타입을 가지는 배열도 선언할 수 있다.

```typescript
let array: (string | number)[] = ['Apple', 1, 2, 'Banana', 'Mango', 3];
// Or
let array: Array<string | number> = ['Apple', 1, 2, 'Banana', 'Mango', 3];
```

배열이 가지는 타입을 예상할 수 없다면 any를 사용할 수 있다.

```typescript
let someArr: any[] = [0, 1, {}, [], 'str', false];
```

<br>

### 인터페이스: Interface

<br>

```typescript
interface IUser {
  name: string,
  age: number,
  isValid: boolean
}
```

<br>

### 커스텀타입: Custom Type

<br>

```typescript
interface IUser {
  name: string,
  age: number,
  isValid: boolean
}

// IUser를 타입으로 사용
let userArr: IUser[] = [
  {
    name: 'Neo',
    age: 85,
    isValid: true
  },
  {
    name: 'Lewis',
    age: 52,
    isValid: false
  },
  {
    name: 'Evan',
    age: 36,
    isValid: true
  }
];
```

<br>

### 읽기 전용 배열

<br>

readonly 키워드나 ReadonlyArray 타입을 사용한다.


```typescript
let arrA: readonly number[] = [1, 2, 3, 4];
let arrB: ReadonlyArray<number> = [0, 9, 8, 7];
```

<br>

### 튜플: Tuple

<br>

Tuple 타입은 배열과 매우 유사하다.

다만, 정해진 타입의 고정된 길이 배열을 표현할 때 사용한다.

```typescript



```


<!-- https://heropy.blog/2020/01/27/typescript/ -->