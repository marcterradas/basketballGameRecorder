import { configureStore, combineReducers } from '@reduxjs/toolkit'
import timer from './timer'
import team from './team'

const reducer = combineReducers({ timer, team })

export default configureStore({ reducer: reducer })
