---
order: 0
title: Introduction
---

`react-ant` is a component library based on Ant Design.

---

## Installation

### Using npm or yarn

**We recommend using npm or yarn to install**, it not only makes development easier, but also allow you to take advantage of the rich ecosystem of Javascript packages and tooling.

```bash
$ npm install react-ant
```

```bash
$ yarn add react-ant
```

If you are in a bad network environment, you can try other registries and tools like [cnpm](https://github.com/cnpm/cnpm).

## Usage

```jsx
import { Star } from 'react-ant';
ReactDOM.render(<div><Star/><span>name</span><div/>, mountNode);
```

And import stylesheets manually:

```jsx
import 'react-ant/dist/react-ant.css'; // or 'react-ant/dist/react-ant.less'
```

### Use modularized antd

> Note: react-ant support ES6 tree shaking by default even without the below plugin.

- Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

  ```js
  // .babelrc or babel-loader option
  {
    "plugins": [
      ["import", { "libraryName": "react-ant", "libraryDirectory": "es", "style": "css" }] // `style: true` for less
    ]
  }
  ```

  This allows you to import components from antd without having to manually import the corresponding stylesheet. The antd babel plugin will automatically import stylesheets.

  ```jsx
  // import js and css modularly, parsed by babel-plugin-import
  import { DatePicker } from 'react-ant';
  ```

- Manually import

  ```jsx
  import DatePicker from 'react-ant/es/date-picker'; // for js
  import 'react-ant/es/date-picker/style/css'; // for css
  // import 'react-ant/es/date-picker/style';         // that will import less
  ```
