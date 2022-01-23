import { Team as TeamInterface, Player as PlayerInterface, Coach as CoachInterface } from '../../interfaces'

import Player from './Player'
import Coach from './Coach'

function Team(team: TeamInterface): JSX.Element {
    const playingPlayers: Array<JSX.Element> = []
    const benchPlayers: Array<JSX.Element> = []

    for (let index in team.players) {
        const player: PlayerInterface = team.players[index]
        const playerElement: JSX.Element = <Player {...player} key={index}></Player>
        player.inGame ? playingPlayers.push(playerElement) : benchPlayers.push(playerElement)
    }

    return (
        <div>
            <div className="grid grid-cols-4 gap-4">{playingPlayers}</div>
            <div className="grid grid-cols-4 gap-4">{benchPlayers}</div>
            <Coach {...team.coach}></Coach>
        </div>
    )
}
export default Team
