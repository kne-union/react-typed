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
