import { configureStore, combineReducers } from '@reduxjs/toolkit'
import timer from './modules/timer'
import team from './modules/team'
import historic from './modules/historic'

const reducer = combineReducers({ timer, team, historic })

export default configureStore({ reducer: reducer })
