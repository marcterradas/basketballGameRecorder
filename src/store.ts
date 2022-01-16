import { configureStore } from '@reduxjs/toolkit'

import { Team } from './interfaces'

const localTeam: Team = {
    type: 'local',
    name: 'Team A',
    logo: 'lakers.svg',
    score: 0,
    bonus: false,
    possession: false,
    fouls: false,
    players: [
        { name: 'Player1', dorsal: 1, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        { name: 'Player2', dorsal: 2, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        { name: 'Player3', dorsal: 3, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        { name: 'Player4', dorsal: 4, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        { name: 'Player5', dorsal: 5, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        { name: 'Player6', dorsal: 5, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player7', dorsal: 5, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player8', dorsal: 5, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player9', dorsal: 5, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player10', dorsal: 5, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player11', dorsal: 5, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player12', dorsal: 5, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false }
    ]
}

const guestTeam: Team = {
    type: 'guest',
    name: 'Team B',
    logo: 'celtics.svg',
    score: 0,
    bonus: false,
    possession: false,
    fouls: false,
    players: [
        { name: 'Player1', dorsal: 1, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        { name: 'Player2', dorsal: 2, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        { name: 'Player3', dorsal: 3, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        { name: 'Player4', dorsal: 4, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        { name: 'Player5', dorsal: 5, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        { name: 'Player6', dorsal: 5, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player7', dorsal: 5, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player8', dorsal: 5, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player9', dorsal: 5, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player10', dorsal: 5, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player11', dorsal: 5, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player12', dorsal: 5, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false }
    ]
}

const initialScoreState = {
    localTeam,
    guestTeam,
    minutes: 10,
    seconds: 0,
    period: 1
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
        case 'updatePeriod':
            result = {
                ...state,
                period: action.period
            }
            break
        default:
            result = state
            break
    }

    return result
}

export default configureStore({ reducer: scoreReducer })
