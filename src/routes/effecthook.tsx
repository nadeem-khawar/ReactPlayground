import { useEffect, useState } from 'react';
import { Button } from '../components/button';
import Geolocation from '../components/hooks/Geolocation';
import IssuesContainer from '../components/hooks/GithubIssues';

export default function EffectHookPage() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);
    return (
        <>
            <div id="effect-hook">
                <h1>Effect Hook</h1>
                <p>Count: {count}</p>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
            <div id="geolocation">
                <Geolocation></Geolocation>
            </div>
            <div id="issues">
                <IssuesContainer></IssuesContainer>
            </div>
        </>
    );
}
