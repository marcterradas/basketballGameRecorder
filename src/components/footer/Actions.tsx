import { useTranslation } from 'react-i18next'

import { Team as TeamInterface } from '../../interfaces'

function Actions(team: TeamInterface): JSX.Element {

    const { t } = useTranslation()
    const containerFlexDirection: string = team.type == 'guest' ? 'flex-row-reverse' : ''

    return (
        <div className={`h-full flex items-center justify-center ${containerFlexDirection}`}>
            <div className="h-20 w-40 border-2 shadow-lg flex items-center justify-center cursor-pointer select-none text-l">{ t('bonus') }</div>
            <div className="h-20 w-40 border-2 shadow-lg flex items-center justify-center cursor-pointer select-none text-l">{ t('possession') }</div>
        </div>
    )
}

export default Actions
