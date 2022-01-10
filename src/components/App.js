import React from 'react'
import useFetch from './useFetch';
import content from '../mocks/content';

function App() {

    const {data, loading, error} = useFetch("https://dog.ceo/api/breeds/image/random");

    if (loading) return <h2> Loading... </h2>;
    if (error) console.log(error);
    
    return (
        <div className='App'>
           <img src={content.message} alt="A Random Dog"/>
           <p>Status: {content.status} </p>
        </div>
    )
}

export default App;
