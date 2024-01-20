import { useState } from 'react';

/**
 * Customowy hook do fetchowania danych z API
 * @param fetchFunction Funkcja, która zwraca Promise z danymi
 * @returns Obiekt z danymi, błędem, stanem ładowania i funkcją do fetchowania danych
 */

const useFetch = (fetchFunction: () => Promise<any>) => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetchFunction();
            setData(response);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, fetchData };
};

export default useFetch;
