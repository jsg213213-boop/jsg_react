import Counter from "./Counter";
import Info from "./Info";
import Counter2 from "./Counter2";
import InfoForm from "./InfoForm";
import MountLog from "./MountLog";
import AutoTimer from "./AutoTimer";

const App = () => {
    return (
        <div>
            <h1>ch08 연습용</h1>
            <h2>Counter</h2>
            <Counter></Counter>
            <h3>Info</h3>
            <Info></Info> 
            <h3>Counter2</h3>
            <Counter2></Counter2>
            <h3>InfoForm</h3>
            <InfoForm></InfoForm>
            <h3>MountLog</h3>
            <MountLog></MountLog>
            <h3>AutoTimer</h3>
            <AutoTimer></AutoTimer>
        </div>
    );
};

export default App;