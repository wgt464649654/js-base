//Promise是异步编程的一种解决方案，它有三种状态，分别是pending-进行中、resolved-已完成、rejected-已失败

//Promise库 Bluebird

//声明一
let promise = new Promise((resolve, reject) => {
	if (1 == 1) {
		setTimeout( () => {
            	resolve(2)
            }, 1000)
	} else {
		reject()
	}
})

promise.then(
	() => { console.log('promise:', 'this is success callback') }, //this is success callback
	() => { console.log('this is fail callback') }  
)

//声明二
function promise2 () {
    return new Promise ( function (resolve, reject) {
        if ( 1 == 1 ) { //换成a会走catch if ( a )
            setTimeout( () => {
            	resolve(2)
            }, 1000)
        } else {
            reject(err)
        }
    } )
}

promise2().then(
	(number) => { console.log('this is success callback' + number) }, //this is success callback2
	() => { console.log('this is fail callback') } 
)

// promise2().then(
// 	(number) => { console.log('this is success callback' + number) }
// ).catch(
// 	//(err) => { console.log(err) } //a is not defined 有任何错误都会进来
// )

let promise3 = Promise.resolve('1')
//console.log(promise3.then((a) => console.log(a))) //1

// Promise.all() 只要有一个变成rejected状态，promise就会立刻变成rejected状态
var promiseAll = Promise.all( [promise2(), promise3] )
promiseAll.then(
    () => console.log('all resolve1')
)

//Promise.race() 参数中的p1、p2、p3只要有一个改变状态，promise就会立刻变成相同的状态并执行对于的回调
var promiseAll = Promise.race( [promise2(), promise3] )
promiseAll.then(
    () => console.log('all resolve2')
)