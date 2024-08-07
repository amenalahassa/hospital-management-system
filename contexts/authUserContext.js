import { createContext, useContext, useEffect, useReducer } from 'react';
import { AuthActionType, authReducer } from "../reducers/authReducer";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthService } from "./authContext";
import {DataValue} from "../models/value";

const AuthUserContext = createContext({});
export function useAuthUser() {
    return useContext(AuthUserContext);
}

export default function AuthUserProvider({ children }) {
    const authService = useAuthService()
    const [currentUser, authDispatcher] = useReducer(authReducer, new DataValue(authService.getCurrentUser(), false, null));

    useEffect(() => {
        return onAuthStateChanged(authService, user => {
            if (user) {
                authDispatcher({type: AuthActionType.CONNECT, user});
            } else {
                authDispatcher({type: AuthActionType.DISCONNECT});
            }
        });
    })

    function isLoading() {
        return currentUser.loading;
    }

    return (
        <AuthUserContext.Provider value={{currentUser, authDispatcher}}>
            {!isLoading() && children}
        </AuthUserContext.Provider>
    )
}
