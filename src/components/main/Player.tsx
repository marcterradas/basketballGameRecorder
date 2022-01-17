import { Player as PlayerInterface } from '../../interfaces'

function Player(player: PlayerInterface): JSX.Element {
    return <div className="h-24 w-24 rounded-full border-2 border-black flex items-center justify-center">{player.dorsal}</div>
}

export default Player
