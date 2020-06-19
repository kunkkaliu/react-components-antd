<h1 align="center">React Ant</h1>

[English](./README.md) | 简体中文

## 📦 安装

```bash
npm install react-ant --save
```

```bash
yarn add react-ant
```

## 🔨 示例

````jsx
import { Star } from 'react-ant';

const App = () => (
  <>
    <Star/><span>姓名</span>
  </>
);

引入样式：

```jsx
import 'react-ant/dist/react-ant.css'; // or 'react-ant/dist/react-ant.less'
````

你也可以使用 [babel-plugin-import](https://ant.design/docs/react/getting-started-cn#按需加载)。
