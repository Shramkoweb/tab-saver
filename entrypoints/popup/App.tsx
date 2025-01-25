import {createSignal} from 'solid-js';
import {Button} from "@/components/button";

import "~/assets/tailwind.css";

function App() {
    const [count, setCount] = createSignal(0);

    return (<>
        <Button/>
        <p>{count()}</p>
    </>);
}

export default App;
