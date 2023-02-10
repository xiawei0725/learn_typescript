// 8-数组类型和元组类型

// 数组在js中 其中的每一项可以是任意的数据类型，那么在ts中如何规范数组的每一项的类型呢

let arr0 = []; // 默认情况下 不写明类型注解 数组中是可以放任意类型的

// 1、简写方式
let arr1: string[] = ["hello", "world"];

let arr2: (string | number)[] = ["hello", 100];

// 2、泛型方式

let arr3: Array<string | number> = ["string", 200];

// 3、只读数组 当尝试去更改数组的时候会提示错误

let arr4: ReadonlyArray<string> = ["tom", "lily"];

let arr5: readonly string[] = ["hello"];

// 元组 可以理解成一种特殊的数组，它能够精确的限定数组项的个数和类型

let t1: [string, number, boolean] = ["string", 1223, true];

interface A {
  length: 2;
  0: string;
  1: boolean;
}

let t2: A = ["hello", true];

// 只读元组

let t3: readonly [boolean, number] = [true, 100];

// t3[0] = false // 报错呢

export default {};
