import Team from './Team'
import Timer from './Timer'

import { Team as TeamInterface } from '../../interfaces'

function Scoreboard() {
    const localTeam: TeamInterface = {
        type: 'local',
        name: 'Team A',
        logo: 'lakers.svg'
    }

    const guestTeam: TeamInterface = {
        type: 'guest',
        name: 'Team B',
        logo: 'celtics.svg'
    }

    return (
        <div className="border-2 border-rose-600 flex items-center justify-between">
            <Team {...localTeam}></Team>
            <Timer></Timer>
            <Team {...guestTeam}></Team>
        </div>
    )
}

export default Scoreboard
