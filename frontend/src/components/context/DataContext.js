import {createContext, useContext, useEffect, useState} from "react";
import DataFetch from "../api/DataFetch";
import AuthContext from "./AuthContext";
import DataParse from "../api/DataParse";

//Purpose is to fetch and store a users data after logging in

const DataContext = createContext(null);


export const useData = () => {
    const context = useContext(DataContext)

    if (!context) {
        console.error("User not found")
    }

    return context
}

export const DataProvider = ({ children }) => {
    const authContext = useContext(AuthContext);
    const [userid, setUserid] = useState(null);
    const [username, setUsername] = useState(null);
    const [forms, setForms] = useState(null);



    useEffect(() => {
        setUsername(authContext.username);
        setUserid(authContext.user);
    }, [authContext.username, authContext.user]);


    useEffect(() => {
        const fetchData = async () => {
            if (userid) {
                const response = await DataFetch(userid);
                const data = await response.json();
                setForms(DataParse(data));
            }
        };

        fetchData();
    }, [userid]);


    const value =  {
        userid,
        username,
        forms
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;

