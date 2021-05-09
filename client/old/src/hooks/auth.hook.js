import {useState, useCallback, useEffect} from 'react'

const storageName = 'userData'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [name, setName] = useState(null)
    const [uemail, setUemail] = useState(null)
    const [userId, setUserId] = useState(null)
    const [ready, setReady] = useState(false)

    const login = useCallback( (jwtToken, id, name, uemail) => {
        setToken(jwtToken)
        setUserId(id)
        setName(name)
        setUemail(uemail)

        localStorage.setItem(storageName, JSON.stringify({
          userId: id,
          token: jwtToken,
          name: name,
          uemail: uemail 
        }))
    }, [])

    const logout = useCallback( () => {
        setToken(null)
        setUserId(null)
        setName(null)
        setUemail(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect( () => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            login(data.token, data.userId, data.name, data.uemail)
        }
        setReady(true)
    }, [login])


    return { login, logout, token, userId, ready, name, uemail}

}