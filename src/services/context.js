import {createContext, useContext, useState} from "react";

const context = createContext({})
const {Provider} = context;

export const AppProvider = ({children}) => {
    const [query, setQuery] = useState('');
    const [selectedUserLogin, setSelectedUserLogin] = useState('');
    const [selectedRepository, setSelectedRepository] = useState('');

    const updateSearchQuery = (q) => {
        setSelectedUserLogin(null);
        setSelectedRepository(null);
        setQuery(q)
    };

    const selectUser = (user) => {
        setSelectedRepository(null);
        setSelectedUserLogin(user);
    }

    const selectRepository = (repository) => setSelectedRepository(repository);

    const value = {
        query,
        selectedUserLogin,
        selectedRepository,
        updateSearchQuery,
        selectUser,
        selectRepository,
    }

    return <Provider value={value}>{children}</Provider>;
}

export const useApp = () => useContext(context);