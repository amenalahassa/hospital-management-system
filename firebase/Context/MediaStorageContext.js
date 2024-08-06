import { useContext, createContext } from 'react';


const MediaStorageContext = createContext({});


export function useMediaStore() {
    return useContext(MediaStorageContext);
}
