import { combineReducers } from 'redux'
import messageReducer from './messageReduser'

const rootReducer = combineReducers({
    message: messageReducer,
})

export default rootReducer
