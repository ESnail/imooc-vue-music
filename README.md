# vue-music

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## vue高级项目练习

**通过该练习，收获：**

- 对路由设计、文件组织、数据组织等的应用更加熟练；
- 掌握vue的一些高级应用：状态管理、组件间数据共享、路由传参跳转懒加载；抽象基础、功能、业务组件，公共类抽象为模块，方便复用

**通过该练习，了解了一些vue插件及基础使用：****

- jsonp：[https://github.com/webmodules/jsonp](https://github.com/webmodules/jsonp)
- vue-lazyLoad(图片懒加载): [https://github.com/hilongjw/vue-lazyload](https://github.com/hilongjw/vue-lazyload)
- good-storage: [https://github.com/ustbhuangyi/storage](https://github.com/ustbhuangyi/storage)
- ......

**通过该练习，学习了一些新的小技巧：**

- |0，或零操作符，正数向下取整，负数向上取整
```js 
0.6|0 => 0, 相当于调用Math.floor(0.6)
```
- 节流函数的使用
```js
export function debounce (func, delay) {
  let timer

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
```
- 洗牌函数的使用
```js
// 洗牌函数，打乱数组元素顺序
export function shuffle (arr) {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}
```
- ...

**在练习的过程中，通过查找资料，解决了问题并帮助到他人：**

- 设置后端代理，绕过refer，获取接口数据，详情可见：[http://www.imooc.com/wenda/detail/382255](http://www.imooc.com/wenda/detail/382255)的回答
- 修复进度条bug，详情可见：[http://www.imooc.com/article/22222](http://www.imooc.com/article/22222)

...

**使用cube-ui 重构**

- 参考文章[vue-music 音乐 App 之 cube-ui 重构](http://www.imooc.com/article/22569)
- 进行了歌手页面重构
- 推荐、排行、搜索、用户中心等的scroll重构
- 删除搜索历史的confirm重构
- 对cube-ui有了一定的了解
- master分支未使用cube-ui重构，重构完全在cube-ui

收获很多，很感谢老师的详细的讲解，^_^_
