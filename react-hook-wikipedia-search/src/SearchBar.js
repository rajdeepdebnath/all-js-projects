import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './SearchBar.css'

const SearchBar = () => {
    const [term, setTerm] = useState('');
    const [debounceterm, setDebounceTerm] = useState('');
    const [result, setResult] = useState([]);
    console.log('search bar');

    useEffect(() => {
        let timeout = setTimeout(() => {
            setDebounceTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        }
    }, [term]);

    useEffect(()=> {
        const search = async () => {
            let resp = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debounceterm
                }
            });

            console.log(resp);
            if(resp.data.query)
                setResult(resp.data.query.search);
        };

        search();
    }, [debounceterm]);

    return (
        <div>
            <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
            <div className="result">
                {result.map(r => <div key={r.pageid} className="snippet"><p>{r.title}</p><p>{r.snippet}</p></div>)}
            </div>
        </div>
    );
}

export default SearchBar;