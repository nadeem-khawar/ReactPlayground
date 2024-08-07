import { FC, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

type Issue = {
    id: number;
    title: string;
    url: string;
    number: number;
};

const LiftStateContainer = () => {
    const [issues, setIssues] = useState<Issue[]>([]);

    return (
        <>
            <SearchBar
                onSearch={(searchTerm) => {
                    axios.get(`https://${searchTerm}`).then((response) => {
                        setIssues(response.data);
                    });
                }}
            ></SearchBar>
            <Issues issues={issues}></Issues>
        </>
    );
};

const SearchBar: FC<{ onSearch: (searchTerm: string) => void }> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div id="search-bar">
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
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
export default LiftStateContainer;
