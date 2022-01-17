import { Team as TeamInterface, Player as PlayerInterface } from '../../interfaces'

import Player from './Player'

function Team(team: TeamInterface): JSX.Element {
    const players: Array<JSX.Element> = team.players.map((player: PlayerInterface, index: number) => <Player {...player} key={index}></Player>)

    return <div className=" grid grid-cols-4 gap-4 border-2 border-red-600">{players}</div>
}
export default Team
