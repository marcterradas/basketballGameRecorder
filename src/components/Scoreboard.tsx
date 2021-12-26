import Team from './Team'
import { Team as TeamInterface } from '../interfaces'

function Scoreboard() {
    const localTeam: TeamInterface = {
        type: 'local',
        logo: ''
    }

    const guestTeam: TeamInterface = {
        type: 'guest',
        logo: ''
    }

    return (
        <div className="border-2 border-rose-600">
            <Team type={localTeam.type} logo={localTeam.logo}></Team>
            <div className="timer">timer</div>
            <Team type={guestTeam.type} logo={guestTeam.logo}></Team>
        </div>
    )
}

export default Scoreboard
