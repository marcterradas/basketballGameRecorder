import { Team as TeamInterface, Player as PlayerInterface } from '../../interfaces'

import Player from './Player'
import Coach from './Coach'

function Team(team: TeamInterface): JSX.Element {
    const playingPlayers: Array<JSX.Element> = []
    const bench: Array<JSX.Element> = []
    const coach: JSX.Element = <Coach {...team.coach}></Coach>

    for (let index in team.players) {
        const player: PlayerInterface = team.players[index]
        const playerElement: JSX.Element = <Player {...player} key={index}></Player>
        player.inGame ? playingPlayers.push(playerElement) : bench.push(playerElement)
    }

    bench.push(coach)

    return (
        <div>
            <div className="grid grid-cols-3 gap-4 mb-10">{playingPlayers}</div>
            <div className="grid grid-cols-4 gap-4">{bench}</div>
        </div>
    )
}
export default Team
