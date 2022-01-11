import Team from './Team'
import Timer from './Timer'

import { localTeam, guestTeam } from '../../store'

function Scoreboard(): JSX.Element {
    return (
        <div className="flex items-center justify-between shadow-md pb-2">
            <Team {...localTeam}></Team>
            <Timer></Timer>
            <Team {...guestTeam}></Team>
        </div>
    )
}

export default Scoreboard
