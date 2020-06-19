<h1 align="center">React Ant</h1>

English | [简体中文](./README-zh_CN.md)

## 📦 Install

```bash
npm install react-ant
```

```bash
yarn add react-ant
```

## 🔨 Usage

```jsx
import { Star } from 'react-ant';

const App = () => (
  <>
    <Star />
    <span>name</span>
  </>
);
```

And import style manually:

```jsx
import 'react-ant/dist/react-ant.css'; // or 'react-ant/dist/react-ant.less'
```

Or use [babel-plugin-import](https://ant.design/docs/react/getting-started#Import-on-Demand).
