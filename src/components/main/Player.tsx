import { Player as PlayerInterface } from '../../interfaces'

function Player(player: PlayerInterface): JSX.Element {
    console.log(player)
    return <div>player ...</div>
}

export default Player
