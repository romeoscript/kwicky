import  { useEffect, useState } from 'react';
import axios from 'axios';

type UseFetchReturnType<Data> = {
    data: Data | null;
    isLoading: boolean;
};


const useFetch = <Data,>(url: string): UseFetchReturnType<Data> => {
    const [data, setData] = useState<Data | null>(null);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsloading(true);
            try {
                const response = await axios.get<Data>(url);
                setData(response.data); 
            } catch (error) {
                console.error('Error fetching data:', error);
               
            } finally {
                setIsloading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, isLoading };
};

export default useFetch;
