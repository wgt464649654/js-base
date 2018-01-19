// value: 设置属性的值
// writable: 值是否可以重写。true | false
// enumerable: 目标属性是否可以被枚举。true | false
// configurable: 目标属性是否可以被删除或是否可以再次修改特性 true | false
// 在ie8下只能在DOM对象上使用，尝试在原生的对象使用 Object.defineProperty()会报错。

//--------------------------------------------

//1. 默认不可被修改，枚举（使用for...in或Object.keys()），删除目标属性或是否可以再次修改属性
let obj = {};
Object.defineProperty(obj, 'test', {
	value: 'hello'
})

//obj.test = "no"; //Cannot assign to read only property 'test' of object '#<Object>'
for( var attr in obj ){
    console.log( attr );  //无输出
}

delete obj.newKey; //无效果

// Object.defineProperty(obj, 'test', { //Cannot redefine property: test
// 	value: 'hello',
// 	writable: true
// }) 

console.log(obj.test); //hello

//--------------------------------------------

//2. 存取器描述
var obj2 = {};
var initValue = 'hello';
Object.defineProperty(obj2,"newKey",{
    get:function (){
        //当获取值的时候触发的函数
        return initValue;    
    },
    set:function (value){
        //当设置值的时候触发的函数,设置的新值通过参数value拿到
        initValue = value;
    }
});
//获取值
console.log( obj2.newKey );  //hello

//设置值
obj.newKey = 'change value';
console.log( obj.newKey, initValue ); //change value hello

//-----------------------------------------------

