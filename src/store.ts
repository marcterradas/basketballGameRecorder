import { configureStore } from '@reduxjs/toolkit'

import { Team as TeamInterface } from './interfaces'

export const localTeam: TeamInterface = {
    type: 'local',
    name: 'Team A',
    logo: 'lakers.svg',
    score: 0,
    bonus: false,
    possession: false,
    fouls: false
}

export const guestTeam: TeamInterface = {
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
    score: 0
}

const scoreReducer = (state = initialScoreState, action) => {
    let result = {}

    switch (action.type) {
        case 'increase/one':
            result = {
                ...state,
                score: state.score + 1
            }
            break
        default:
            result = state
            break
    }

    return result
}

export default configureStore({ reducer: scoreReducer })
