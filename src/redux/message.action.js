import axios from 'axios'

export const fetchMessage = () => (dispatch) => {
    axios
        .get('https://api.chucknorris.io/jokes/random')
        .then((res) => res.data)
        .then((data) => {
            dispatch({
                type: 'MESSAGE_SUCCESS',
                message: data.message,
            })
        })
}
