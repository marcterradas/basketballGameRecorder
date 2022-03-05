import store from '../../../store/store'

import { Player, Team } from '../../../interfaces'

function HistoricElement(historic: any): JSX.Element {
    const team: Team = store.getState().team.localTeam.id == historic.teamId ? store.getState().team.localTeam : store.getState().team.guestTeam
    const player: Player = typeof store.getState().team.localTeam.players[historic.playerId] !== 'undefined' ? store.getState().team.localTeam.players[historic.playerId] : store.getState().team.guestTeam.players[historic.playerId]

    const flexDirection: string = team.type == 'guest' ? 'flex-row-reverse' : ''
    const marginDirection: string = team.type == 'guest' ? 'ml-2' : 'mr-2'

    return (
        <div className={`w-full p-4 rounded-lg flex ${flexDirection} items-center border-2 border-gray-400 mb-4 `}>
            <div className={`h-8 w-8 flex items-center justify-center rounded-full border-2 border-stone-500 ${marginDirection}`}>{player.dorsal}</div>
            <div>{player.name}</div>
        </div>
    )
}

export default HistoricElement
