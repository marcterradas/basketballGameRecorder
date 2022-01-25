import { useTranslation } from 'react-i18next'

import { Team as TeamInterface } from '../../interfaces'

function Actions(team: TeamInterface): JSX.Element {

    const { t } = useTranslation()
    const containerFlexDirection: string = team.type == 'guest' ? 'flex-row-reverse' : ''
    const bonusMargin: string = team.type == 'local' ? 'mr-10' : ''
    const possessionMargin: string = team.type == 'guest' ? 'mr-10' : ''

    return (
        <div className={`h-full flex items-center justify-center ${containerFlexDirection}`}>
            <div className={`h-16 w-40 rounded-md flex items-center justify-center cursor-pointer select-none text-l bg-green-100 ${bonusMargin}`}>{ t('bonus') }</div>
            <div className={`h-16 w-40 rounded-md flex items-center justify-center cursor-pointer select-none text-l bg-green-100 ${possessionMargin}`}>{ t('possession') }</div>
        </div>
    )
}

export default Actions
