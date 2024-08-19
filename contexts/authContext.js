import {createContext, useContext} from 'react';
import {AuthService} from "../services/authService";

const AuthServiceContext = createContext({
    authService: AuthService = new AuthService()
});
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
