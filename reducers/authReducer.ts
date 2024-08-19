// This is a reducer that handles the authentication state of the app. It has actions to authenticated user details.

export enum AuthActionType {
    LOAD_USER = 'LOAD_USER',
    REMOVE_USER = 'REMOVE_USER',
    SET_USER = 'SET_USER',
    RAISE_ERROR = 'RAISE_ERROR'
}

export const authReducer = (state, action) => {
    switch (action.type) {
        case AuthActionType.LOAD_USER:
            state.loading = true
            return state
        case AuthActionType.RAISE_ERROR:
            state.loading = false
            state.error = action.error
            return state
        case AuthActionType.REMOVE_USER:
            state.loading = false
            state.value = null
            state.error = null
            return state
        case AuthActionType.SET_USER:
            state.loading = false
            state.value = action.user
            state.error = null
            return state
        default:
            return state
    }
}