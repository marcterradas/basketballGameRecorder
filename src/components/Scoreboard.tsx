import Team from './Team'
import Timer from './Timer'

import { Team as TeamInterface } from '../interfaces'

function Scoreboard() {
    const localTeam: TeamInterface = {
        type: 'local',
        name: 'Team A',
        logo: ''
    }

    const guestTeam: TeamInterface = {
        type: 'guest',
        name: 'Team B',
        logo: ''
    }

    return (
        <div className="border-2 border-rose-600">
            <Team {...localTeam}></Team>
            <Timer></Timer>
            <Team {...guestTeam}></Team>
        </div>
    )
}

export default Scoreboard
