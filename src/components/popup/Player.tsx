import store from '../../store/store'

function Player(): JSX.Element {
    const closePopup = (): void => {
        store.dispatch({ type: 'closePopup' })
    }

    return (
        <div onClick={closePopup} className="z-2 absolute w-full h-full bg-gray-400 opacity-80 flex items-center justify-center">
            Player Popup ...
        </div>
    )
}

export default Player
