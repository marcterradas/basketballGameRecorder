import { Team } from './../interfaces'

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
        { name: 'Player6', dorsal: 6, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player7', dorsal: 7, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player8', dorsal: 8, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player9', dorsal: 9, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player10', dorsal: 10, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player11', dorsal: 11, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player12', dorsal: 12, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false }
    ],
    coach: { name: 'CoachA', technicalFouls: 0, ejected: false }
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
        { name: 'Player6', dorsal: 6, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player7', dorsal: 7, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player8', dorsal: 8, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player9', dorsal: 9, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player10', dorsal: 10, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player11', dorsal: 11, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { name: 'Player12', dorsal: 12, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false }
    ],
    coach: { name: 'CoachB', technicalFouls: 0, ejected: false }
}

const initialScoreState = {
    localTeam,
    guestTeam
}

const reducer = (state = initialScoreState, action: any) => {
    let result = {}

    const localTeam: Team = { ...state.localTeam }
    const guestTeam: Team = { ...state.guestTeam }

    switch (action.type) {
        case 'switchBonusStatus':
            action.team == 'local' ? (localTeam.bonus = !localTeam.bonus) : (guestTeam.bonus = !guestTeam.bonus)
            result = {
                ...state,
                localTeam: localTeam,
                guestTeam: guestTeam
            }
            break
        case 'switchPossessionStatus':
            action.team == 'local' ? (localTeam.possession = !localTeam.possession) : (guestTeam.possession = !guestTeam.possession)
            result = {
                ...state,
                localTeam: localTeam,
                guestTeam: guestTeam
            }
            break
        default:
            result = state
            break
    }

    return result
}

export default reducer
