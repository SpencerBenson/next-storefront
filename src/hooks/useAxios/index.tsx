import axios from 'axios';
import { useEffect, useState } from 'react';

type RequestMethod = 'GET' | 'POST';

type States<T> = {
    data: T | null;
    loading: boolean;
    error: boolean;
};

type UseAxiosParams<T> = {
    url: string;
    method?: RequestMethod;
    body?: T | null;
};

function useAxios<T>({ url, method = 'GET', body = null }: UseAxiosParams<T>) {
    const [states, setStates] = useState<States<T>>({
        data: null,
        loading: false,
        error: false,
    });

    async function fetchData() {
        setStates(prevStates => ({ ...prevStates, loading: true }));
        try {
            let response: { data: T };
            const baseURL = 'https://fakestoreapi.com';
            const requestURL = baseURL + url;

            if (method === 'GET') {
                response = await axios.get<T>(requestURL);
            } else if (method === 'POST') {
                response = await axios.post<T>(requestURL, body);
            }

            setStates(prevStates => ({ ...prevStates, data: response.data }));
        } catch (err) {
            setStates(prevStates => ({ ...prevStates, error: true }));
        } finally {
            setStates(prevStates => ({ ...prevStates, loading: false }));
        }
    }

    useEffect(() => {
        fetchData();
    }, [url, method, body]);

    return states;
}

export default useAxios;
