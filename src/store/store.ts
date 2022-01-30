import { configureStore, combineReducers } from '@reduxjs/toolkit'
import timer from './timer'
import team from './team'

export default configureStore({ reducer: combineReducers({ timer, team }) })
