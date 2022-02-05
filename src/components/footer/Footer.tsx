import store from '../../store/store'

import Actions from './Actions'
import Language from './Language'

import { Team as TeamInterface } from '../../interfaces'

function Footer(): JSX.Element {
    const localTeam: TeamInterface = store.getState().team.localTeam
    const guestTeam: TeamInterface = store.getState().team.guestTeam

    return (
        <div className="w-full flex items-center justify-between">
            <div className="w-1/12"></div>
            <div className="w-10/12 flex items-center justify-between">
                <Actions {...localTeam}></Actions>
                <Actions {...guestTeam}></Actions>
            </div>
            <div className="w-1/12 flex items-center justify-center">
                <Language></Language>
            </div>
        </div>
    )
}

export default Footer
