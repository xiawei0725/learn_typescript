/**
 * 类型注解
 
typescript 内置了一些类型，当然用户自己也可以通过一些声明类型形式定义类型。那么给变量加上
这些类型就称为类型注解，通过冒号+类型的形式给变量加上类型

 */

let s: string = '123'

let el: HTMLElement = document.createElement('div')

type A = string | HTMLElement

let a: A = ''


/**
 * 类型推断
 有的时候我们定义变量，但是没有给它指定类型，ts能够根据变量的值自动推断出其类型，如果一旦给变量
 赋值其他类型，ts就能帮我们检查类型，这就是类型推断
 */

let number = 456 // 能自动推断出number变量是number类型，那么其就只能是number类型

// number = '789'



export { }