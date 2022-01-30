import { configureStore, combineReducers } from '@reduxjs/toolkit'
import timer from './modules/timer'
import team from './modules/team'

const reducer = combineReducers({ timer, team })

export default configureStore({ reducer: reducer })
