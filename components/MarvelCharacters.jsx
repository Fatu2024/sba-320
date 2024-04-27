import { useState, useEffect } from 'react';
import md5 from 'md5';

const API_URL = "https://gateway.marvel.com/v1/public/characters";
const publicKey = "4d5d35b938108e1338d38c2f98359d98";
const privateKey = "99db5c1de87c1cd5bab319cbf5e89794e9643158";

export default function MarvelCharacters() {
    //setting initial state of character name to an empty string
    const [name, setName] = useState('');
    //setting data to null bc I haven't fetched anything yet
    const [data, setData] = useState(null);

    //need a handlechange in order ot use my state values in my f(x)
    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const timestamp = new Date().getTime().toString();
        const hash = md5(timestamp + privateKey + publicKey);
        try {
            const response = await fetch(`${API_URL}?nameStartsWith=${name}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`);
            const responseData = await response.json();
            setData(responseData);
        } catch (error) {
            console.error('Error fetching character data:', error);
        }
    };

    useEffect(() => {
        // initial fetch can be done here if needed
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    value={name}
                    onChange={handleChange}
                    placeholder='Enter character name here'
                />
                <button type='submit'>Search</button>
            </form>
            {data && data.data && data.data.results && (
                <div>
                    <h2>Results:</h2>
                    <ul>
                        {data.data.results.map((character) => (
                            <li key={character.id}>{character.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}