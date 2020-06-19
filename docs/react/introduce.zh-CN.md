---
order: 0
title: 组件平台介绍
---

`react-ant` 是基于 Ant Design 二次封装的组件库。

---

## 安装

### 使用 npm 或 yarn 安装

**我们推荐使用 npm 或 yarn 的方式进行开发**，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```bash
$ npm install react-ant --save
```

```bash
$ yarn add react-ant
```

如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

## 示例

```jsx
import { Star } from 'react-ant';
ReactDOM.render(<div><Star/><span>姓名</span><div/>, mountNode);
```

引入样式：

```jsx
import 'react-ant/dist/react-ant.css'; // or 'react-ant/dist/react-ant.less'
```

### 按需加载

> 注意：react-ant 默认支持基于 ES module 的 tree shaking，不使用以下插件也会有按需加载的效果。

下面两种方式都可以只加载用到的组件。

- 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)（推荐）。

  ```js
  // .babelrc or babel-loader option
  {
    "plugins": [
      ["import", {
        "libraryName": "react-ant",
        "libraryDirectory": "es",
        "style": "css" // `style: true` 会加载 less 文件
      }]
    ]
  }
  ```

  然后只需从 react-ant 引入模块即可，无需单独引入样式。等同于下面手动引入的方式。

  ```jsx
  // babel-plugin-import 会帮助你加载 JS 和 CSS
  import { DatePicker } from 'react-ant';
  ```

- 手动引入

  ```jsx
  import DatePicker from 'react-ant/es/date-picker'; // 加载 JS
  import 'react-ant/es/date-picker/style/css'; // 加载 CSS
  // import 'react-ant/es/date-picker/style';         // 加载 LESS
  ```
