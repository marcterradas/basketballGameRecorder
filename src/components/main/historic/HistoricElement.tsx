import { useTranslation } from 'react-i18next'

import store from '../../../store/store'

import { Player, Team } from '../../../interfaces'

function HistoricElement(historic: any): JSX.Element {
    const { t } = useTranslation()
    const team: Team = store.getState().team.localTeam.id == historic.teamId ? store.getState().team.localTeam : store.getState().team.guestTeam
    const player: Player = typeof store.getState().team.localTeam.players[historic.playerId] !== 'undefined' ? store.getState().team.localTeam.players[historic.playerId] : store.getState().team.guestTeam.players[historic.playerId]

    const flexDirection: string = team.type == 'guest' ? 'flex-row-reverse' : ''
    const dorsalMargin: string = team.type == 'guest' ? 'ml-2' : 'mr-2'
    const pointsMargin: string = team.type == 'guest' ? 'mr-2' : 'ml-2'

    let pointsStr: string = ''

    switch (historic.points) {
        case 1:
            pointsStr = t('add_one_point')
            break
        case 2:
            pointsStr = t('add_two_points')
            break
        case 3:
            pointsStr = t('add_three_points')
            break
    }

    return (
        <div className={`w-full p-4 rounded-lg flex ${flexDirection} items-center justify-center border-2 border-gray-400 mb-4 `}>
            <div className={`flex flex-1 ${flexDirection} items-center`}>
                <div className={`h-8 w-8 flex items-center justify-center rounded-full border-2 border-stone-500 ${dorsalMargin}`}>{player.dorsal}</div>
                <div>{player.name}</div>
                <div className={`font-bold ${pointsMargin}`}>({pointsStr})</div>
            </div>
            <div className="flex flex-1 items-center justify-center">score ...</div>
            <div className="flex flex-1 items-center justify-center">{historic.time}</div>
        </div>
    )
}

export default HistoricElement
