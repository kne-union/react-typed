
# react-typed


### 描述

react封装打字特效


### 安装

```shell
npm i --save @kne/react-typed
```

### 示例


#### 示例样式

```scss
.ant-card {
  border-color: black;
  text-align: center;
  width: 200px;
}
```

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _ReactTyped(@kne/current-lib_react-typed)[import * as _ReactTyped from "@kne/react-typed"],antd(antd)

```jsx
const {default: ReactTyped} = _ReactTyped;
const {Button} = antd;
const {useRef} = React;

const BaseExample = () => {
    const ref = useRef(null);
    return <div>
        <Button onClick={() => {
            const typed = ref.current.getInstance();
            typed.reset();
        }}>重新执行</Button>
        <br/>
        <ReactTyped typeSpeed={50} ref={ref}>
            哈哈哈哈哈
            <p>hahaha</p>
        </ReactTyped>
    </div>;
};

render(<BaseExample/>);

```


### API

| 属性名 | 说明 | 类型 | 默认值 |
|-----|----|----|-----|
|     |    |    |     |

