import store from '../../../store/store'

import { Player, Team } from '../../../interfaces'

function HistoricElement(historic: any): JSX.Element {
    const team: Team = store.getState().team.localTeam.id == historic.teamId ? store.getState().team.localTeam : store.getState().team.guestTeam
    const player: Player = typeof store.getState().team.localTeam.players[historic.playerId] !== 'undefined' ? store.getState().team.localTeam.players[historic.playerId] : store.getState().team.guestTeam.players[historic.playerId]

    const flexDirection: string = team.type == 'guest' ? 'flex-row-reverse' : ''
    console.log(team)

    return (
        <div className={`w-full border border-red-600 flex ${flexDirection}`}>
            <div>{player.dorsal}</div>
            <div>{player.name}</div>
        </div>
    )
}

export default HistoricElement
