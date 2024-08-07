import {createContext, useContext} from 'react';
import {authService} from "../ressources/firebase";

const AuthServiceContext = createContext({});
export function useAuthService() {
    return useContext(AuthServiceContext);
}

export default function AuthServiceProvider({ children }) {
    return (
        <AuthServiceContext.Provider value={authService}>
            { children }
        </AuthServiceContext.Provider>
    )
}
