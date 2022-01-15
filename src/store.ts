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

const initialScoreState = { score: 0 }
const scoreReducer = (state = initialScoreState, action: string): object => {
    let result = {}

    switch (action) {
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

const store = configureStore({ reducer: scoreReducer })
console.log(store.getState())
