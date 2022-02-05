import store from '../../../store/store'

import { Player as PlayerInterface } from '../../../interfaces'

function Player(player: PlayerInterface): JSX.Element {
    const openPopup = (): void => {
        store.dispatch({ type: 'selectPlayer', playerId: player.id })
    }

    return (
        <div className="h-24 w-24 rounded-full border-2 shadow-lg flex items-center justify-center cursor-pointer select-none text-4xl bg-blue-200" onClick={openPopup}>
            {player.dorsal}
        </div>
    )
}

export default Player
