import CssBaseline from '@material-ui/core/CssBaseline'
import React, { useEffect } from 'react'
import Main from './Main/Main'
import { useDispatch } from 'react-redux'
import { fetchMessage } from '../redux/message.action'

const App = () => {
    useEffect(() => {
        dispatch(fetchMessage())
    }, [])

    const dispatch = useDispatch()

    return (
        <>
            <CssBaseline />
            <Main />
        </>
    )
}

export default App
