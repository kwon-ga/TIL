let testPromise = new Promise((resolve, reject) => {
    console.log('1. executor 실행 !!');
    // reject('err'); // 강제로 에러 코드 블록 실행 !!
    resolve('짬뽕 !!'); // resolve 함수 호출 !!
})

testPromise.then((data) => {
    console.log('2. resolve 실행 !!');
    console.log('2-1 resolve data !! :'+data);
}).catch((err)=>{
    // 에러 호출 시 요기 코드 실행 !! 
    console.log(`err msg !! : ${err}`);
})

Promise.resolve();

async function testawait() {
	const result = await 'Test!';
	console.log(result);
}

console.log(typeof testawait());