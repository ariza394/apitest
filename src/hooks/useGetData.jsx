import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useGetData = (url) => {

    const [dataApi,setDataApi] = useState([]);

    useEffect(() =>{
        getData();
    },[]);

    const getData = async() =>{
        const {data} = await axios.get(`http://localhost:3030/patentes`);
        setDataApi(data);
    };

    return dataApi;
}
 
export default useGetData;