/**
 * 7-类型保护
 *
 *  类型保护 是在对变量类型做出非常精准的逻辑处理，比如你在if语句中通过不同的类型能做不同的事情，进入不同的逻辑，保证代码的健壮性，并且编译出来的代码是包含这些类型保护语句的
 *
 * 常见的类型保护 有 typeof  instanceof 真值 相等  in操作符等 总之就是尽可能的缩小类型的范围，能够保证不出问题
 * 
 * https://www.typescriptlang.org/docs/handbook/2/narrowing.html
 *
 */

function foo(a: any) {
  if (typeof a === "boolean") {
    console.log(a);
  }
  if (typeof a === "number") {
    console.log(Math.abs(a));
  }
  if (Array.isArray(a)) {
    a.push("1");
  }
  if (a instanceof Date) {
    console.log(a.getFullYear());
  }
}

let a1 = foo("string");

foo(2);

foo([]);

foo(new Date());

class A {
  name: string = "tom";
  say() {}
}

class B {
  age: number = 12;
  miao() {}
}

function bar(a: A | B) {
  if ("name" in a) {
    console.log(a.say);
  } else {
    console.log(a.miao);
  }
}

function isA(x: A | B): x is A {
  return (x as A).say !== undefined;
}

function sum(x: A | B) {
  if (isA(x)) {
    x.name;
    x.say;
  }
}

export default {};
