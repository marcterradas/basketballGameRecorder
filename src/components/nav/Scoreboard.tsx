import store from '../../store'

import Team from './Team'
import Timer from './Timer'

import { Team as TeamInterface } from '../../interfaces'

function Scoreboard(): JSX.Element {
    const localTeam: TeamInterface = store.getState().localTeam
    const guestTeam: TeamInterface = store.getState().guestTeam

    return (
        <div className="w-full flex items-center justify-between shadow-md pb-2">
            <Team {...localTeam}></Team>
            <Timer></Timer>
            <Team {...guestTeam}></Team>
        </div>
    )
}

export default Scoreboard
