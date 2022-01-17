import { Team as TeamInterface, Player as PlayerInterface } from '../../interfaces'

import Player from './Player'

function Team(team: TeamInterface): JSX.Element {
    const players = team.players.map((player, index) => <Player {...player} key={index}></Player>)
    return <div>{players}</div>
}
export default Team
