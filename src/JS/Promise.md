## Promise

<br>


-대기(Pending) : 이행하거나 거부되지 않은 초기상태  
-이행(Fulfilled) : 연산이 성공적으로 완료됨  
-거부(Rejected) : 연산이 실패함  

반드시 위 3가지 상태를 지니며, 대기 상태가 아니라면 promise의 연산은 이미 끝난 상태로 볼 수 있다.

<br>

```js
new Promise(executor);


new Promise((resolve, reject) => {
	// executor (명령문)
});
```

<br>

프로미스가 만들어 질 때 executor가 실행된다.  
resolve나 reject를 따로 호출하지 않으면 추가 실행이 없다.

<br>

```js
let testPromise = new Promise((resolve, reject) => {
    console.log('1. executor 실행 !!');
    //resolve('짬뽕 !!'); // resolve 함수 호출 !!
})


testPromise.then((data) => {
    console.log('2. resolve 실행 !!');
    console.log('2-1 resolve data !! :'+data);
}).catch((err)=>{
    // 에러 시 요기 코드 실행 !! 
    console.log(`err msg !! : ${err}`);
})

/*
result
1. executor 실행 !!
*/
```
<br>
resolve를 호출하면 .then에 작성된 코드 블럭이 실행된다 !! 

<br>

```js
let testPromise = new Promise((resolve, reject) => {
    console.log('1. executor 실행 !!');
    resolve('짬뽕 !!'); // resolve 함수 호출 !!
})


testPromise.then((data) => {
    console.log('2. resolve 실행 !!');
    console.log('2-1 resolve data !! :'+data);
}).catch((err)=>{
    // 에러 시 요기 코드 실행 !! 
    console.log(`err msg !! : ${err}`);
})

/* result
1. executor 실행 !!
2. resolve 실행 !!
2-1 resolve data !! :짬뽕 !!
*/

```
<br>
reject를 호출하여 강제로 에러 코드 블럭을 실행시킬 수 있다.

<br>

```js
let testPromise = new Promise((resolve, reject) => {
    console.log('1. executor 실행 !!');
    reject('err'); // 강제로 에러 코드 블록 실행 !!
    resolve('짬뽕 !!'); // resolve 함수 호출 !!
})

testPromise.then((data) => {
    console.log('2. resolve 실행 !!');
    console.log('2-1 resolve data !! :'+data);
}).catch((err)=>{
    // 에러 호출 시 요기 코드 실행 !! 
    console.log(`err msg !! : ${err}`);
})

/*
1. executor 실행 !!
err msg !! : err
*/
```

*유용한 프로미스 함수
- [Promise.all](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- [Promise.race](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)

