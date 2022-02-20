import { Team, Player } from '../../interfaces'

import { localTeam, guestTeam } from '../mokupdata'

const selectedPlayerId: number | null = null
const selectedCoachId: number | null = null

const initialScoreState = {
    localTeam,
    guestTeam,
    selectedPlayerId,
    selectedCoachId
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
            if (localTeam.players[state.selectedPlayerId] !== 'undefined') {
                localTeam.score += action.points
                localTeam.players[state.selectedPlayerId].points += action.points
            } else {
                guestTeam.score += action.points
                guestTeam.players[state.selectedPlayerId].points += action.points
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
