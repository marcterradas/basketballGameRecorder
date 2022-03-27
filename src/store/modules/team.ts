import { Team, Player, Historic } from '../../interfaces'

import { localTeam, guestTeam } from '../mokupdata'

const selectedPlayerId: number | null = null
const selectedCoachId: number | null = null
const renderPlayerPopup: boolean = false
const renderCoachPopup: boolean = false
const removePopup: boolean = false
const historic: Array<Historic> = []

const initialScoreState = {
    localTeam,
    guestTeam,
    selectedPlayerId,
    selectedCoachId,
    renderPlayerPopup,
    renderCoachPopup,
    removePopup,
    historic
}

const reducer = (state = initialScoreState, action: any) => {
    let result = {}
    let historic: Array<Historic> = []

    const localTeam: Team = JSON.parse(JSON.stringify(state.localTeam))
    const guestTeam: Team = JSON.parse(JSON.stringify(state.guestTeam))

    switch (action.type) {
        case 'switchBonusStatus':
            action.team == 'local' ? (localTeam.bonus = !localTeam.bonus) : (guestTeam.bonus = !guestTeam.bonus)
            result = { ...state, localTeam: localTeam, guestTeam: guestTeam }
            break

        case 'switchPossessionStatus':
            action.team == 'local' ? (localTeam.possession = !localTeam.possession) : (guestTeam.possession = !guestTeam.possession)
            result = { ...state, localTeam: localTeam, guestTeam: guestTeam }
            break

        case 'selectPlayer':
            result = { ...state, selectedPlayerId: action.playerId, selectedCoachId: null, renderPlayerPopup: true }
            break

        case 'selectCoach':
            result = { ...state, selectedPlayerId: null, selectedCoachId: action.coachId, renderCoachPopup: true }
            break

        case 'closePopup':
            result = { ...state, selectedPlayerId: null, selectedCoachId: null, removePopup: true }
            break

        case 'renderPlayerPopup':
            result = { ...state, renderPlayerPopup: false }
            break

        case 'renderCoachPopup':
            result = { ...state, renderCoachPopup: false }
            break

        case 'updateRemovePopup':
            result = { ...state, removePopup: false }
            break

        case 'addPoints':
            if (typeof localTeam.players[state.selectedPlayerId] !== 'undefined') {
                localTeam.score += action.points
                localTeam.players[state.selectedPlayerId].points += action.points
            } else {
                guestTeam.score += action.points
                guestTeam.players[state.selectedPlayerId].points += action.points
            }
            result = { ...state, localTeam: localTeam, guestTeam: guestTeam }
            break

        case 'addHistoric':
            historic = JSON.parse(JSON.stringify(state.historic))
            const teamId: number = typeof localTeam.players[state.selectedPlayerId] !== 'undefined' ? localTeam.id : guestTeam.id
            const localTeamScore: string = localTeam.score.toString().padStart(2, '0')
            const guestTeamScore: string = guestTeam.score.toString().padStart(2, '0')
            const historicElement: Historic = {
                teamId: teamId,
                playerId: state.selectedPlayerId,
                time: action.time,
                points: action.points,
                score: `${localTeamScore} - ${guestTeamScore}`
            }

            historic.push(historicElement)

            result = {
                ...state,
                historic: historic
            }
            break

        case 'removeHistoric':
            historic = JSON.parse(JSON.stringify(state.historic))
            historic.splice(action.index, 1)
            result = {
                ...state,
                historic: historic
            }

            break

        default:
            result = state
            break
    }

    return result
}

export default reducer
