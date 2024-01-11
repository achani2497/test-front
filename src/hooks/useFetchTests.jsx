import { useCallback, useEffect, useState } from 'react';
import { getAllTests } from '../services/testsService';

export function useFetchTests() {
    const [tests, setTests] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getTests = useCallback(() => {
        getAllTests().then((data) => {
            setTests(data);
            setIsLoading(false)
        });
    }, []);

    useEffect(() => {
        getTests();
    }, [getTests]);

    return { tests, refreshTests: getTests, isLoading, setIsLoading }
}