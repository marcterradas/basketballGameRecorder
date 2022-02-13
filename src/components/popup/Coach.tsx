import store from '../../store/store'

function Coach(): JSX.Element {
    const closePopup = (): void => {
        store.dispatch({ type: 'closePopup' })
    }

    const styles: object = {
        backgroundImage: "url('/src/images/close.png')"
    }

    return (
        <div className="z-2 absolute w-full h-full bg-gray-400 opacity-90 flex items-center justify-center">
            <div onClick={closePopup} className="absolute top-4 right-4 cursor-pointer w-12 h-12 bg-contain bg-no-repeat bg-center" style={styles}></div>
            <div className="z-3">Coach popup ...</div>
        </div>
    )
}

export default Coach
