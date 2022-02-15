import { Team, Player, Coach } from '../../interfaces'

const localTeam: Team = {
    id: 1,
    type: 'local',
    name: 'Team A',
    logo: 'lakers.svg',
    score: 0,
    bonus: false,
    possession: false,
    fouls: false,
    players: [
        { id: 1, name: 'Player1', dorsal: 1, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        { id: 2, name: 'Player2', dorsal: 2, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        { id: 3, name: 'Player3', dorsal: 3, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        { id: 4, name: 'Player4', dorsal: 4, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        { id: 5, name: 'Player5', dorsal: 5, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        { id: 6, name: 'Player6', dorsal: 6, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { id: 7, name: 'Player7', dorsal: 7, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { id: 8, name: 'Player8', dorsal: 8, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { id: 9, name: 'Player9', dorsal: 9, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { id: 10, name: 'Player10', dorsal: 10, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { id: 11, name: 'Player11', dorsal: 11, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { id: 12, name: 'Player12', dorsal: 12, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false }
    ],
    coach: { id: 1, name: 'CoachA', technicalFouls: 0, ejected: false }
}

const guestTeam: Team = {
    id: 2,
    type: 'guest',
    name: 'Team B',
    logo: 'celtics.svg',
    score: 0,
    bonus: false,
    possession: false,
    fouls: false,
    players: [
        { id: 13, name: 'Player1', dorsal: 1, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        { id: 14, name: 'Player2', dorsal: 2, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        { id: 15, name: 'Player3', dorsal: 3, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        { id: 16, name: 'Player4', dorsal: 4, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        { id: 17, name: 'Player5', dorsal: 5, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: true },
        { id: 18, name: 'Player6', dorsal: 6, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { id: 19, name: 'Player7', dorsal: 7, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { id: 20, name: 'Player8', dorsal: 8, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { id: 21, name: 'Player9', dorsal: 9, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { id: 22, name: 'Player10', dorsal: 10, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { id: 23, name: 'Player11', dorsal: 11, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false },
        { id: 24, name: 'Player12', dorsal: 12, points: 0, fouls: 0, technicalFouls: 0, injured: false, ejected: false, inGame: false }
    ],
    coach: { id: 2, name: 'CoachB', technicalFouls: 0, ejected: false }
}

const selectedPlayerId: number | null = null
const selectedCoachId: number | null = null

const initialScoreState = {
    localTeam,
    guestTeam,
    selectedPlayerId,
    selectedCoachId
}

const getPlayer = (playerId: number): Player | null => {
    for (const player of localTeam.players) {
        if (player.id == playerId) {
            return player
        }
    }

    for (const player of guestTeam.players) {
        if (player.id == playerId) {
            return player
        }
    }

    return null
}

const getCoach = (coachId: number): Coach | null => {
    if (localTeam.coach.id == coachId) {
        return localTeam.coach
    }

    if (guestTeam.coach.id == coachId) {
        return guestTeam.coach
    }

    return null
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
        case 'selectPlayer':
            result = {
                ...state,
                selectedPlayerId: action.playerId,
                selectedCoachId: null
            }
            break
        case 'selectCoach':
            result = {
                ...state,
                selectedPlayerId: null,
                selectedCoachId: action.coachId
            }
            break
        case 'closePopup':
            result = {
                ...state,
                selectedPlayerId: null,
                selectedCoachId: null
            }
            break
        case 'addPoints':
            console.log(action.points)
            result = state
            break
        default:
            result = state
            break
    }

    return result
}

export default reducer
