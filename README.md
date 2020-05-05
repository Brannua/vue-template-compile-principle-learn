> 前置知识: JS 的 with 语法

- with 要慎用！因为它打破了作用域规则！导致代码可读性变差！

```js
  const obj = {
    a: 100,
    b: 200
  }

  log(obj.a)
  log(obj.b)
  log(obj.c)  // undefined！！！

  with(obj) {
    log(a)
    log(b)
    log(c)    // 报错！！！
  }
```

> 前情提要

- 模板不是html，有指令、插值、js表达式、能循环、判断

- html是标签语言，只有js这种图灵完备的语言才能实现顺序、判断和循环

- 因此，模板一定是被转换为js代码，即编译模板～

> 编译模板

- Vue template complier 将模板编译为 render 函数

- 执行render函数生成vnode
