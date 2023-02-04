/**
 * ts 作为一个类型语言，相对js而言 ，那么在程序中，只有变量才具备类型，包括函数。
 * 在ts中要做的就是为变量指定各种各样的类型，包括函数参数 返回值等等
 * 
 * 在js中声明变量可以用 var  let const class function 等等
 * 
 * 那么在ts中声明类型也有 类似的 例如 type  interface  class 包括函数指定类型等
 * 
 * 
 */

type A = string

let a: A = 'abc124'

interface Hello {
    world: number
}

const hello: Hello = {
    world: 789
}

class Student {
    name = ''
    constructor() {

    }
}

let s: Student = {
    name: 'xiaoming'
}


function abc(a: number, b: number): number {
    return a + b
}

type ABC = (a: string, b: string) => number

const abcd: ABC = function (a, b) {
    console.log(a, b);
    return 123
}

abcd('a', 'b')


export {}