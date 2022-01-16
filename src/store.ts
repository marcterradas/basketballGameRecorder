import { configureStore } from '@reduxjs/toolkit'

import { Team as TeamInterface } from './interfaces'

const localTeam: TeamInterface = {
    type: 'local',
    name: 'Team A',
    logo: 'lakers.svg',
    score: 0,
    bonus: false,
    possession: false,
    fouls: false
}

const guestTeam: TeamInterface = {
    type: 'guest',
    name: 'Team B',
    logo: 'celtics.svg',
    score: 0,
    bonus: false,
    possession: false,
    fouls: false
}

const initialScoreState = {
    localTeam,
    guestTeam,
    minutes: 0,
    seconds: 0,
    period: 0
}

const scoreReducer = (state = initialScoreState, action) => {
    let result = {}

    switch (action.type) {
        case 'updateTime':
            result = {
                ...state,
                minutes: action.minutes,
                seconds: action.seconds
            }
            break
        default:
            result = state
            break
    }

    return result
}

export default configureStore({ reducer: scoreReducer })
