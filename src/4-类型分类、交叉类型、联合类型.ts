// 4-类型分类、交叉类型、联合类型

/**
 * 类型分类
 * 在ts中给变量声明类型主要包含 ： 基本类型  对象类型  新增类型
基本类型： string number boolean null undefined symbol bigint
对象类型： object array function
新增的类型：any never void unknown enum

 */


let str: string = 'hello world'
let age: number = 12
let isDone: boolean = true
let nul: null = null
let undef: undefined = undefined
let sym: symbol = Symbol()
let bignumber: bigint = 1n


let obj: { name: string } = { name: 'tom' }
let arr1: string[] = ['hello', 'world']
let arr2: Array<number> = [1, 2, 3]
function fn1(name: string): void { }

const fn2 = (name: string): void => {

}

type A = {
    uname: string
}

type B = {
    age: number
}

// 联合类型

/**
联合类型 就是说可以是多个类型中间的一个 以竖线分割声明联合类型
 */

let user: string | object = ''

user = {}
// user = 456  // user只能是 string  或者object


// 交叉类型

/**
交叉类型就是说必须同时满足多个类型  以&符合连接声明 
 */

type C = { name: string } & { age: number }

let c: C = {
    name: '',
    age: 12
}