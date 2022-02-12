import { useState } from 'react'

import store from '../store/store'

import Coach from './popup/Coach'
import Player from './popup/Player'

import Scoreboard from './nav/Scoreboard'
import Main from './main/Main'
import Footer from './footer/Footer'

function App(): JSX.Element {
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

    return (
        <div className="flex flex-wrap min-h-full">
            {popup}
            <Scoreboard></Scoreboard>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}

export default App
