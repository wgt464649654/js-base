function foo() {
	//var arr = Array.prototype.slice.call(arguments);
	var arr = Array.from(arguments); //ES6
	arr.push('aa');
	console.log(arr);
}

console.log(foo('bb','cc'));

let a = ['foo','qq'];
//console.log(Array.prototype.reverse.call(a));
console.log(a.reverse());
//将数组转化为字符串
console.log(a.join('1'));

console.log(Number.MAX_VALUE);

console.log(typeof cc === undefined);

undefined = 2;
console.log(undefined);

//严格模式下不能给undefined赋值
function aaaa() {
	'use strict'
	//undefined = 2;
}
aaaa()
console.log(undefined);
console.log(1/0);
