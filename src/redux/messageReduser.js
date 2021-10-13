const messageReducer = (state = [], action) => {
    switch (action.type) {
        case 'MESSAGE_SUCCESS':
            return action.message || state

        default:
            return state
    }
}

export default messageReducer
