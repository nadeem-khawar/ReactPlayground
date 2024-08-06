import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

type Issue = {
    id: number;
    title: string;
    url: string;
    number: number;
};

const IssuesContainer = () => {
    const [issues, setIssues] = useState<Issue[]>([]);
    useEffect(() => {
        axios.get('https://api.github.com/repos/facebook/react/issues').then((response) => {
            setIssues(response.data);
        });
    }, []);
    return <Issues issues={issues}></Issues>;
};

const Issues: FC<{ issues: Issue[] }> = ({ issues }) => {
    return (
        <div id="issues">
            <h1>Issues</h1>
            <ul>
                {issues.map((issue) => (
                    <li key={issue.id}>
                        <Link to={issue.url} target="_blank">
                            {issue.number}: {issue.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default IssuesContainer;
