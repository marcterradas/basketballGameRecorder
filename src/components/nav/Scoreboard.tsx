import Team from './Team'
import Timer from './Timer'

import { Team as TeamInterface } from '../../interfaces'

function Scoreboard(): JSX.Element {
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
        <div className="flex items-center justify-between shadow-md pb-2">
            <Team {...localTeam}></Team>
            <Timer></Timer>
            <Team {...guestTeam}></Team>
        </div>
    )
}

export default Scoreboard
