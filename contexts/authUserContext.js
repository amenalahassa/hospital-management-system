import { createContext, useContext, useEffect, useReducer } from 'react';
import { AuthActionType, authReducer } from "../reducers/authReducer";
import { useAuthService } from "./authContext";
import {DataValue} from "../models/value";
import { getAuth } from "firebase/auth";

const AuthUserContext = createContext({
    currentUser: new DataValue(null, false, null),
    authDispatcher: () => {}
});
export function useAuthUser() {
    return useContext(AuthUserContext);
}

export default function AuthUserProvider({ children }) {
    const authService = useAuthService()
    const authProvider = getAuth();
    const [currentUser, authDispatcher ] = useReducer(authReducer, new DataValue(authService.authUser, false, null));

    useEffect(() => {
        return authProvider.onAuthStateChanged(user => {
            if (user) {
                authDispatcher({type: AuthActionType.SET_USER, user});
            } else {
                authDispatcher({type: AuthActionType.REMOVE_USER});
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
