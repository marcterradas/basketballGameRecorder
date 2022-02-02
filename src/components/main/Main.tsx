import store from '../../store/store'

import Team from './team/Team'
import Historic from './historic/Historic'

import { Team as TeamInterface } from '../../interfaces'

function Main(): JSX.Element {
    const localTeam: TeamInterface = store.getState().team.localTeam
    const guestTeam: TeamInterface = store.getState().team.guestTeam

    return (
        <div className="w-full flex items-stretch justify-between pt-4 px-6 border-y-2 bg-neutral-50">
            <Team {...localTeam}></Team>
            <Historic></Historic>
            <Team {...guestTeam}></Team>
        </div>
    )
}

export default Main
