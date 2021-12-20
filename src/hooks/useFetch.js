import { useState, useEffect } from "react"

export const useFetch = url => {

    const [dataFetch, setDataFetch] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    const getData = async() => {
        try {
            const resp = await fetch(url);
            const result = await resp.json();
            setDataFetch(result);
            setIsFetching(false);
        } catch (error) {
            console.log({error});
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return{
        dataFetch,
        isFetching
    }
}