// 9-对象类型和索引签名

// 方式一
function foo1(data: { id: number; title: string }) {}

let data1 = {
  id: 1,
  title: "title",
};
foo1(data1);

// 方式二

interface User {
  readonly id: number;
  title: string;
}

function foo2(data: User) {
  //   data.id = 789; 只读属性
}

let data2: User = {
  id: 2,
  title: "title2",
};
foo2(data2);
// data2.id = 234 //只读属性
// 方式三

type Student = {
  code: number;
  name: string;
  addr?: string; // 可选属性
};

function getStudentInfo(student: Student) {
  // student.addr.length  // 这里将报错
  console.log(student.addr?.toLocaleLowerCase); // 这里由于使用了es6的？语法 所以不会报错
}

let s = {
  code: 110,
  name: "tom",
};
getStudentInfo(s);

// 索引签名

// 有时候有的对象很多属性 ，但是不可能一一列出，此时就可以采用索引签名来定义

interface order {
  id: number;
  code: string;
  [index: string]: any;
}

let o: order = {
  id: 110,
  code: "xxxxyyyy",
  user: {},
  detail: {},
  0: "dsafdas", // 也是可以的
  "1": "",
};

// 通常来说 索引签名的索引类型我们尽量使用 string 除非你保证将来索引一定是譬如数字之类的
