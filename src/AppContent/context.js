"use client";
import { fetchDataFromApi } from '@/utils/api';
import { createContext, useEffect, useState } from 'react';

const Context = createContext();

const AppContext = (props) => {
    const [selectedCat, setSelectedCat] = useState("New");
    const [endPoint, setEndPoint] = useState('search/?q=');
    const [data, setData] = useState([]);  // Initialize data as an empty array
    const [toggle, setToggle] = useState(false);

    // Fetch data on category or endpoint change
    useEffect(() => {
        fetchData(`${endPoint}${selectedCat}`);
    }, []);

    // Fetch function to get data from API
    const fetchData = (url) => {
        fetchDataFromApi(url)
            .then((res) => {
                setData(res);  // Store the API response data
            })
           
    };

    const value = {
        selectedCat,
        setSelectedCat,
        fetchData,
        endPoint,
        setToggle,
        toggle,
        data,
        setData
    };

    return (
        <>
        {
            data.length!==0 &&
            <Context.Provider value={value}>
               {props.children}
            </Context.Provider>
        }

        </>
        
    )
}

export default AppContext;
export { Context };
