### 비동기 함수 ( Async Function )

<br>

-비동기 함수의 결과 값은 항상 Promise 객체로 resolve 된다.  
-비동기 함수 안에서만 awaait 연산자를 사용할 수 있다.

<br>

***

<br>

## async 란?
<br>
promise를 매우 편리하게 사용할 수 있게 도와주는 문법이다.

async는 await와 같이 사용된다.

*아래 예시를 통해 사용해보자

```js
// promise와 setTimeout()을 사용해서 비동기 코드를 흉내낸 함수
function timer(time){
	return new Promise((resolve)=>{
        setTimeout(()=>{resolve(time)},time);
    });
}

// timer 함수가 끝나면 콘솔에 time을 출력하고 1초를 추가해서 사이클을 반복하라
console.log('start');
timer(1000).then((time)=>{
    console.log('time:'+time);
	return timer(time+1000);
}).then((time)=>{
    console.log('time:'+time);
	return timer(time+1000);
}).then((time)=>{
    console.log('time:'+time);
  	console.log('end');
});

/*
start
time:1000
time:2000
time:3000
end
*/

```
<br>

위 예제를 깔끔하게 만들어보자 ...

<br>

```js
function timer(time){
	return new Promise((resolve)=>{
        setTimeout(()=>{resolve(time)},time);
    });
}

// 비동기 처리
async function run(){
    console.log('start');
    let time = await timer(1000);
    console.log('time:'+time);
    time = await timer(time+1000);
    console.log('time:'+time);
    time = await timer(time+1000);
    console.log('time:'+time);
    console.log('end');
}


console.log('parent start');
run();
console.log('parent end');

/* 위에 함수와 결과값이 같으나 코드가 간결해진 것을 볼 수 있다.
parent start
start
parent end
time:1000
time:2000
time:3000
end
*/
```
<br>

위 예제에서 console.log(run()); 을 실행해보면 promise를 반환하는데 아래 예제와 결과 값을 비교해보자

<br>

```js
// 함수는 동일하다.
function timer(time){ ... }

// 비동기 처리
async function run(){ ... }

async function run2(){
    console.log('parent start');
    await run();
    console.log('parent end');
}
run2();
                     
/* 바로 위 예제와 결과를 비교해보자
parent start
start
time:1000
time:2000
time:3000
end
parent end
*/
```

<br>

|순서|run()			|run2()|
|----|:----|:----|
|1|parent start|	parent start|
|2|start			|start|
|3|parent end		|time:1000|
|4|time:1000		|time:2000|
|5|time:2000		|time:3000|
|6|time:3000		|end|
|7|end			|	parent end|

<br>

즉, await 가 붙은 run();이 종료된 후에 console.log('parent end'); 가 실행되는 것을 볼 수 있다.


정리해보면 일반 함수 앞에 async 를 붙여주면 비동기로 처리해달라는 의미이고, 내부에 있는 await은 async 내부에서만 사용 가능하며, await가 붙은 요청은 그 요청이 끝나는 시점까지 다음 동작으로 넘어가지 못하게 한다.

<br>

-await를 사용하면 Promise가 fulfill 되거나 rejected 될 때 까지 함수의 실행을 중단하고 기다릴 수 있다.  
-Promise의 연산이 끝나면 함수에서 반환한 값을 얻을 수 있다.  
-await 연산자는 async 함수 안에서만 사용할 수 있다.

