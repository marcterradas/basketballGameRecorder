import { useState } from 'react'

import store from '../../store/store'

import Coach from './Coach'
import Player from './Player'

function Main(): JSX.Element {
    const [popup, setPopup] = useState(<div></div>)

    const showPopups = (): void => {
        const selectedPlayerId: number | null = store.getState().team.selectedPlayerId
        const selectedCoachId: number | null = store.getState().team.selectedCoachId

        setPopup(<div></div>)

        if (selectedPlayerId) {
            setPopup(<Player></Player>)
        }

        if (selectedCoachId) {
            setPopup(<Coach></Coach>)
        }
    }

    store.subscribe(showPopups)

    return <>{popup}</>
}

export default Main
