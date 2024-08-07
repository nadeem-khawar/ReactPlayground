import { FC, useState } from 'react';
import { Button } from '../catalyst/button';
type operation = 'increment' | 'decrement';
const CounterContainer = () => {
    const [count, setCount] = useState<number>(0);
    const handleCounter = (operation: operation) => {
        if (operation === 'increment') {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
        console.log('Count:', count);
    };
    return (
        <div>
            <Counter count={count} />
            <Button onClick={() => handleCounter('increment')}>Increment</Button>
            <Button onClick={() => handleCounter('decrement')}>Decrement</Button>
        </div>
    );
};

type Props = {
    count: number;
};

const Counter: FC<Props> = ({ count }) => {
    return (
        <div id="counter">
            <h1>Counter</h1>
            <p>Count: {count}</p>
        </div>
    );
};
export default CounterContainer;
