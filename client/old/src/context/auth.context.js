import {createContext} from 'react'

function neverUsed() {}

export const AuthContext = createContext({
    name: null,
    uemail: null,
    token: null,
    userId: null,
    login: neverUsed,
    logout: neverUsed,
    isAuthenticated: false
})