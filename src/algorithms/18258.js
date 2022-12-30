// 큐
// 정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.
/*
    push X: 정수 X를 큐에 넣는 연산이다.
    pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    size: 큐에 들어있는 정수의 개수를 출력한다.
    empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
    front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
*/
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let [N, ...input] = require('fs').readFileSync('input.txt').toString().split('\n');

class Node {
    constructor(data){
        this.data = data;
        this.nextData = null;
    }
}

class Queue {
    
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(data){
        
        let node = new Node(data);

        if(!this.head){
            this.head = node ;
            this.head.nextData = this.tail;
        }else{
            this.tail.nextData = node;
        }

        this.tail = node;
        this.size += 1;

        return data
    }

    pop(){
        if(this.head){
            if(this.size <= 1){
                // 큐에 데이터가 1개 이하인 경우 -> head = tail
                let returnData = this.head;
                this.head = null;
                this.tail = null;
                this.size = 0;
                return returnData.data
            }else{
                // 큐에 데이터가 2개 이상 있는 경우
                let returnData = this.head;
                this.head = this.head.nextData;
                this.size += -1;
                return returnData.data
            }  
        }else{
            // 큐에 데이터가 없는 경우
            return -1
        }
    }
    
    qsize(){
        return this.size
    }

    empty(){
        return this.size ? 0 : 1
    }

    front(){
        return this.head ? this.head.data : -1
    }

    back(){
        return this.tail ? this.tail.data : -1
    }

}

let queue = new Queue();


input.map(e => {

    let [order, num] = e.split(' ');
    
    switch (order) {
        case 'push':
            console.log('push')
            console.log(queue.push(parseInt(num)));
        break;

        case 'pop':
            console.log('pop')
            console.log(queue.pop());
        break;

        case 'size':
            console.log('size')
            console.log(queue.qsize());
        break;

        case 'empty':
            console.log('empty')
            console.log(queue.empty());
        break;

        case 'front':
            console.log('front')
            console.log(queue.front());
        break;

        case 'back':
            console.log('back')
            console.log(queue.back());
        break;

    }

})