/**
 * 1、模板编译为render函数，执行该函数会返回vnode
 * 2、基于vnode再执行patch和diff
 * 注意: 开发环境下的vue-loader，会在开发环境下编译模板！
 * 注意: 而平时写个vue页面demo直接在浏览器中浏览，是在浏览器中进行模板编译，这种方式慢！
 * 了解模板编译后的高阶开发方式: 有些特殊性情况下，编写vue组件时，可以用render函数写法代替template～
 */

const compiler = require('vue-template-compiler')

// // 插值
// const template = `<p>{{ message }}</p>`
// const res = compiler.compile(template)
// console.log(res.render)

// // 表达式
// const template = `<p>{{ flag ? message : 'no message found' }}</p>`
// const res = compiler.compile(template)
// console.log(res.render)

// // 属性和动态属性
// const template = `
//   <div class="container" id="div1">
//     <img :src="imgUrl"/>
//   </div>
// `
// const res = compiler.compile(template)
// console.log(res.render)

// // 条件
// const template = `
//   <div>
//     <p v-if="flag === 'a'">A</p>
//     <p v-else>B</p>
//   </div>
// `
// const res = compiler.compile(template)
// console.log(res.render)

// // 循环
// const template = `
//   <ul>
//     <li v-for="item in list" :key="item.id">{{ item.title }}</li>
//   </ul>
// `
// const res = compiler.compile(template)
// console.log(res.render)

// // 事件
// const template = `
//   <button @click="clickHandler">submit</button>
// `
// const res = compiler.compile(template)
// console.log(res.render)

// // 事件
// const template = `
//   <button @click="clickHandler">submit</button>
// `
// const res = compiler.compile(template)
// console.log(res.render)

// // v-model
// const template = `
//   <input type="text" v-model="name">
// `
// const res = compiler.compile(template)
// console.log(res.render)

// ----------------------分割线---------------------------------

/**
 * vue源码中缩写函数的含义
 */

function _c() {
  var vnode = createElement()
  // ...
  return vnode
}
function installRenderHelpers(target) {
  target._v = createTextVNode
  target._s = toString
  target._l = renderList
  // ...
}
