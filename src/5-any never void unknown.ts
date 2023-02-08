/**
 *
 * null undefined any  never void unknown 等类型
 */

// 1、在js中 null 代表是变量值为null  undefined 而是代表变量声明但未赋值

// null 和 undefined 是其它类型的子类型，也就是说可以将 null 或者 undefined 赋值给其它类型，如数字类型，此时，赋值后的类型会变成 null 或 undefined （必须在非strictNullChecks模式下才行哦）

let num = 123;

// 默认情况下 这两个赋值会报错 ，因为ts默认开启了strictNullChecks

// num = null

// num = undefined

// 2、any 类型即任意类型  都不会报错  一般在 类型定义困难或者是结构复杂以及一些三方库没有ts类型的时候用

let name: any;

name = "tom";
name = 123;
name.length;
name.toFixed;

let el = document.getElementById("#app");
// 非空断言
// el!.style.color = '#f00'

// 3、never never是其它类型(null undefined)的子类型，代表不会出现的值 主要作为不会返回（ return ）的函数的返回值类型

function foo(n: string) {
  if (typeof n === "string") {
    console.log(n.length);
  } else {
    // 此时由于永远不可能走到这里 因此类型推断成了never呢
    console.log(n);
  }
  while (true) {}
}

// 4、void 在英文中是无效的 空的 空空如也的意思  也就是说没有类型
// fn 函数没有返回值 所以result就是一个空的 也就是void类型
// void 、any 、never区别

/**
 *
 * 1、 非strictNullChecks 模式下 void可以赋值给null,undefined
 * 2、 any代表任意类型 任何类型都可以给其赋值
 * 3、 never代表的是永远不，也就是永久不可达，通常此时程序死循环无法终止或者抛出异常
 *
 */
let fn = (n: number) => {
  console.log(n);
};

let result = fn(12);
// result = null
// result = undefined

// 5、unknown  unknown 类型是 any 类型对应的安全类型 ，上面可以看出 any类型在使用属性或者方法时是不会报错的，但是unknown则需明确类型后使用

let unk: unknown;
if (typeof unk === "string") {
  // 只有明确unk是string 才能使用length属性
  unk.length;
}

export default {};
