import React, {useState, useEffect} from 'react';


function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true);
        fetch('https://dog.ceo/api/breeds/image/random')

        
        .then((response) => {
            setData(response.data);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [url]);

    return {data , loading , error};
}



export default useFetch
