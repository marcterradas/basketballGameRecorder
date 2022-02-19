import { Team, Player, Coach, Historic } from '../../interfaces'

import { localTeam, guestTeam } from '../mokupdata'

const historic: Array<Historic> = []

const selectedPlayerId: number | null = null
const selectedCoachId: number | null = null

const initialScoreState = {
    localTeam,
    guestTeam,
    selectedPlayerId,
    selectedCoachId,
    historic
}

const getCoach = (coachId: number | null): Coach | null => {
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

    const localTeam: Team = JSON.parse(JSON.stringify(state.localTeam))
    const guestTeam: Team = JSON.parse(JSON.stringify(state.guestTeam))

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
            for (let index in localTeam.players) {
                const player: Player = { ...localTeam.players[index] }

                if (player.id == state.selectedPlayerId) {
                    localTeam.score += action.points
                    localTeam.players[index].points += action.points
                    break
                }
            }

            for (let index in guestTeam.players) {
                const player: Player = { ...guestTeam.players[index] }

                if (player.id == state.selectedPlayerId) {
                    guestTeam.score += action.points
                    guestTeam.players[index].points += action.points
                    break
                }
            }

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
