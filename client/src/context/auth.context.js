import {createContext} from 'react'

function neverUsed() {}

export const AuthContext = createContext({
    token: null,
    userId: null,
    login: neverUsed,
    logout: neverUsed,
    isAuthenticated: false
})