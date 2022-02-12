import store from '../../store/store'

function Coach(): JSX.Element {
    const closePopup = (): void => {
        store.dispatch({ type: 'closePopup' })
    }

    return (
        <div onClick={closePopup} className="z-2 absolute w-full h-full bg-gray-400 opacity-80 flex items-center justify-center">
            Coach popup ...
        </div>
    )
}

export default Coach
