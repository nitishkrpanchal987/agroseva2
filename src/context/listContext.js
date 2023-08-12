import { useState, useEffect, useContext, createContext } from "react";

const ListContext = createContext();


const ListProvider = ({children})=>{

    
    const [list, setList] = useState({});
    useEffect(()=>{
        const data = localStorage.getItem('obj');
        if(data){
            const parsedata = JSON.parse(data);
            setList({
                ...list,
                parsedata
            })
        }
    }, [list])
    return(
        <ListContext.Provider value = {[list, setList]}>
            {children}
        </ListContext.Provider>
    )
}

const useList = () => useContext(ListContext);
export{useList, ListProvider};