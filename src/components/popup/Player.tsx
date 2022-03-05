import store from '../../store/store'

import { useTranslation } from 'react-i18next'

function Player(props: any): JSX.Element {
    const { t } = useTranslation()

    const closeButtonStyles: object = {
        backgroundImage: "url('/src/images/close.png')"
    }

    const closePopup = (): void => {
        store.dispatch({ type: 'closePopup' })
    }

    const addPoint = (points: number): void => {
        if (props.inCountDown) {
            store.dispatch({ type: 'addPoints', points: points })

            const minutes: number = store.getState().timer.minutes
            const seconds: number = store.getState().timer.seconds
            const minutesStr: string = minutes.toString().padStart(2, '0')
            const secondsStr: string = seconds.toString().padStart(2, '0')
            const timeStr: string = `${minutesStr}:${secondsStr}`

            store.dispatch({ type: 'addHistoric', time: timeStr, points: points })

            closePopup()
        }
    }

    const customButton: string = props.inCountDown ? 'cursor-pointer' : 'cursor-not-allowed'

    return (
        <div className="z-2 absolute w-full h-full bg-gray-400 opacity-90 flex items-center justify-center">
            <div onClick={closePopup} className="absolute top-4 right-4 cursor-pointer w-12 h-12 bg-contain bg-no-repeat bg-center" style={closeButtonStyles}></div>
            <div className="z-3">
                <div onClick={() => addPoint(1)} className={`mb-4 h-14 w-32 rounded-md flex items-center justify-center select-none text-l border-2 border-stone-500 font-bold bg-white ${customButton}`}>
                    {t('add_one_point')}
                </div>
                <div onClick={() => addPoint(2)} className={`mb-4 h-14 w-32 rounded-md flex items-center justify-center select-none text-l border-2 border-stone-500 font-bold bg-white ${customButton}`}>
                    {t('add_two_points')}
                </div>
                <div onClick={() => addPoint(3)} className={`h-14 w-32 rounded-md flex items-center justify-center select-none text-l border-2 border-stone-500 font-bold bg-white ${customButton}`}>
                    {t('add_three_points')}
                </div>
            </div>
        </div>
    )
}

export default Player
