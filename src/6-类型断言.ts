/**
 * 6-类型断言
 * 
 * 
 虽然ts能定义和推断类型，但是程序毕竟是程序，有时候它并不能完全清楚的知道对应的变量是何种类型，此时就需要我们人为的告诉ts 认定某个变量是何类型了，这就叫做类型断言
 */

//  例如一个 canvas元素， ts只知道这可能是一个html元素或者null ，但是它并不知道这是一个canvas对象，因此当你使用canvas api的时候 是没有智能提示的  
let canvas = document.querySelector('#app')

if(canvas){
    // canvas.getContext // 此时 你调用这个方法 是会报警告的 
}

// 使用类型断言关键字 as 来判断这个元素就是一个canvas对象


if(canvas){
    let ctx = (canvas as HTMLCanvasElement).getContext('2d') 
}


// 当然 类型断言又有双重断言 

let ctx2 = (canvas as Element as HTMLCanvasElement ).getContext('2d')


// 非空断言 

let a: string | null

a!.length // 可以消除null的错误


// 请注意 类型断言和非空断言都是人为的消除ts检查，实际生成的代码不会有任何判断的逻辑，如果页面上将来真的没有canvas元素或者是 变量a真的是null 还是会运行报错的

export default {};
