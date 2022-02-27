import { useState } from 'react'

import store from '../../store/store'

import Coach from './Coach'
import Player from './Player'

function Main(): JSX.Element {
    const [popup, setPopup] = useState(<div></div>)

    const showPopups = (): void => {
        const renderPlayerPopup: boolean = store.getState().team.renderPlayerPopup
        const renderCoachPopup: boolean = store.getState().team.renderCoachPopup
        const removePopup: boolean = store.getState().team.removePopup
        const countDown: boolean = store.getState().timer.countDown

        if (removePopup) {
            setPopup(<div></div>)
            store.dispatch({ type: 'updateRemovePopup' })
            unsubscribe()
        }

        if (renderPlayerPopup) {
            setPopup(<Player countDown={countDown} ></Player>)
            store.dispatch({ type: 'renderPlayerPopup' })
            unsubscribe()
        }

        if (renderCoachPopup) {
            setPopup(<Coach></Coach>)
            store.dispatch({ type: 'renderCoachPopup' })
            unsubscribe()
        }
    }

    const unsubscribe = store.subscribe(showPopups)

    return <>{popup}</>
}

export default Main
