import store from '../../store'

import Actions from './Actions'

import { Team as TeamInterface } from '../../interfaces'

function Footer(): JSX.Element {
    const localTeam: TeamInterface = store.getState().localTeam
    const guestTeam: TeamInterface = store.getState().guestTeam

    return (
        <div className="w-full flex items-center justify-center">
            <Actions {...localTeam} ></Actions>
            <Actions {...guestTeam}></Actions>
        </div>
    )
}

export default Footer
