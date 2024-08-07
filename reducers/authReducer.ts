// This is a reducer that handles the authentication state of the app. It has actions to authenticated user details.

export enum AuthActionType {
    LOAD = 'LOAD',
    DISCONNECT = 'DISCONNECT',
    CONNECT = 'CONNECT',
    RAISE_ERROR = 'RAISE_ERROR'
}

export const authReducer = (state, action) => {
    switch (action.type) {
        case AuthActionType.LOAD:
            state.loading = true
            return state
        case AuthActionType.RAISE_ERROR:
            state.loading = false
            state.error = action.error
            return state
        case AuthActionType.DISCONNECT:
            state.loading = false
            state.value = null
            state.error = null
            return state
        case AuthActionType.CONNECT:
            state.loading = false
            state.value = action.user
            state.error = null
            return state
        default:
            return state
    }
}