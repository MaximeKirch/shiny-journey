import React, { createContext, useContext, useState, useEffect, Children, ReactNode } from 'react'
import { API_TOKEN } from '@env'

export const MyDataContext = createContext<any>(null);

type MyDataProviderProps = {
    children : ReactNode;
}

export const DataProvider: React.FC<MyDataProviderProps> = ({children}) => {
    const [data,setData] = useState();

    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: API_TOKEN
      }
    };
    
    useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(json => setData(json.results))
      .catch(err => console.error('error:' + err));
    },[])

    console.log(data)

  return (
    <MyDataContext.Provider value={data}>{children}</MyDataContext.Provider>
  )
}

export function useMyData() {
    return useContext(MyDataContext);
}