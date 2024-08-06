import { useEffect, useState } from 'react';

export default function EffectHookPage() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);
    return (
        <div id="effect-hook">
            <h1>Effect Hook</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}
