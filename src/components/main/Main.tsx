import store from '../../store'

import Team from './team/Team'
import Historic from './historic/Historic'

import { Team as TeamInterface } from '../../interfaces'

function Main(): JSX.Element {
    const localTeam: TeamInterface = store.getState().localTeam
    const guestTeam: TeamInterface = store.getState().guestTeam

    return (
        <div className="w-full h-full flex items-stretch justify-between pt-4 px-6">
            <Team {...localTeam}></Team>
            <Historic></Historic>
            <Team {...guestTeam}></Team>
        </div>
    )
}

export default Main
