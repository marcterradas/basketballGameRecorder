import store from '../../store/store'

import Actions from './Actions'

import { Team as TeamInterface } from '../../interfaces'

function Footer(): JSX.Element {
    const localTeam: TeamInterface = store.getState().team.localTeam
    const guestTeam: TeamInterface = store.getState().team.guestTeam

    return (
        <div className="w-full flex items-center justify-between">
            <Actions {...localTeam}></Actions>
            <Actions {...guestTeam}></Actions>
        </div>
    )
}

export default Footer
