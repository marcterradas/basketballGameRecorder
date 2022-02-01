import store from '../../store/store'


import { useTranslation } from 'react-i18next'

import { Team as TeamInterface } from '../../interfaces'

function Actions(team: TeamInterface): JSX.Element {
    const { t } = useTranslation()
    const containerFlexDirection: string = team.type == 'guest' ? 'flex-row-reverse' : ''
    const bonusMargin: string = team.type == 'local' ? 'mr-8' : ''
    const possessionMargin: string = team.type == 'guest' ? 'mr-8' : ''

    const switchBonusStatus = (): void => {
        store.dispatch({ type: 'switchBonusStatus', team: team.type })
    }

    const switchPossessionStatus = (): void => {
        store.dispatch({ type: 'switchPossessionStatus', team: team.type })
    }

    return (
        <div className={`h-full flex items-center justify-center ${containerFlexDirection} px-6`}>
            <div onClick={switchBonusStatus} className={`h-16 w-36 rounded-md flex items-center justify-center cursor-pointer select-none text-l bg-green-200 ${bonusMargin}`}>
                {t('bonus')}
            </div>
            <div onClick={switchPossessionStatus} className={`h-16 w-36 rounded-md flex items-center justify-center cursor-pointer select-none text-l bg-green-200 ${possessionMargin}`}>
                {t('possession')}
            </div>
        </div>
    )
}

export default Actions
