import {createSignal} from 'solid-js';
import "~/assets/tailwind.css";

function App() {
    const [count, setCount] = createSignal(0);

    return (<>
        <p>{count()}</p>
    </>);
}

export default App;
