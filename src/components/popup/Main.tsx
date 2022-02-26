import { useState } from 'react'

import store from '../../store/store'

import Coach from './Coach'
import Player from './Player'

function Main(): JSX.Element {
    const [popup, setPopup] = useState(<div></div>)

    const showPopups = (): void => {
        const renderPlayerPopup = store.getState().team.renderPlayerPopup
        const renderCoachPopup = store.getState().team.renderCoachPopup
        const removePopup = store.getState().team.removePopup

        if (removePopup) {
            setPopup(<div></div>)
            store.dispatch({ type: 'updateRemovePopup' })
        }

        if (renderPlayerPopup) {
            setPopup(<Player></Player>)
            store.dispatch({ type: 'renderPlayerPopup' })
        }

        if (renderCoachPopup) {
            setPopup(<Coach></Coach>)
            store.dispatch({ type: 'renderCoachPopup' })
        }
    }

    store.subscribe(showPopups)

    return <>{popup}</>
}

export default Main
