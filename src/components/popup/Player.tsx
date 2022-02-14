import store from '../../store/store'

function Player(): JSX.Element {
    const styles: object = {
        backgroundImage: "url('/src/images/close.png')"
    }

    const closePopup = (): void => {
        store.dispatch({ type: 'closePopup' })
    }

    const addPoint = (points: number): void => {
        console.log(points)
        closePopup()
    }

    return (
        <div className="z-2 absolute w-full h-full bg-gray-400 opacity-90 flex items-center justify-center">
            <div onClick={closePopup} className="absolute top-4 right-4 cursor-pointer w-12 h-12 bg-contain bg-no-repeat bg-center" style={styles}></div>
            <div className="z-3">
                <div onClick={() => addPoint(1)} className="cursor-pointer">
                    Add one point
                </div>
                <div onClick={() => addPoint(2)} className="cursor-pointer">
                    Add two points
                </div>
                <div onClick={() => addPoint(3)} className="cursor-pointer">
                    Add three points
                </div>
            </div>
        </div>
    )
}

export default Player
