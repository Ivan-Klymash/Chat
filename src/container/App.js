import CssBaseline from '@material-ui/core/CssBaseline'
import React, { useEffect, useState } from 'react'
import Main from './Main/Main'
import { useDispatch } from 'react-redux'
import { fetchMessage } from '../redux/message.action'

const App = () => {
    useEffect(() => {
        dispatch(fetchMessage())
    }, [])

    const dispatch = useDispatch()

    const [likeButtonState, setLikeButtonState] = useState({ 1: true, 2: true })

    const changeLike = (id) => {
        setLikeButtonState((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }

    return (
        <>
            <CssBaseline />
            <Main likeButtonState={likeButtonState} changeLike={changeLike} />
        </>
    )
}

export default App
