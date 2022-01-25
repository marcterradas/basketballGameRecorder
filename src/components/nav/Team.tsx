import { useTranslation } from 'react-i18next'

import { Team as TeamInterface } from '../../interfaces'

function Team(team: TeamInterface): JSX.Element {
    const { t } = useTranslation()

    const logo: string = `/src/images/${team.logo}`
    const logoStyles: object = { backgroundImage: `url('${logo}')` }
    const containerFlexDirection: string = team.type == 'guest' ? 'flex-row-reverse' : ''
    const score: string = team.score.toString().padStart(2, '0')
    const bonusClass: string = team.bonus ? 'bg-green-600' : 'bg-red-600'
    const possessionClass: string = team.possession ? 'bg-green-600' : 'bg-red-600'
    const foulsClass: string = team.fouls ? 'bg-green-600' : 'bg-red-600'

    return (
        <div className={`flex ${containerFlexDirection}`}>
            <div>
                <div className="h-40 w-40 bg-contain bg-no-repeat bg-center" style={logoStyles}></div>
                <div className="text-center select-none">{team.name}</div>
            </div>
            <div className="bold h-40 w-60 flex items-center justify-center text-center text-6xl select-none">{score}</div>
            <div className="flex flex-wrap items-center justify-center">
                <div className="w-full flex items-center">
                    <div className={`h-4 w-4 border-2 rounded-full border-black mr-1 ${bonusClass} select-none`}></div>
                    <div className="select-none">{t('bonus')}</div>
                </div>
                <div className="w-full flex items-center">
                    <div className={`h-4 w-4 border-2 rounded-full border-black mr-1 ${possessionClass} select-none`}></div>
                    <div className="select-none">{t('possession')}</div>
                </div>
                <div className="w-full flex items-center">
                    <div className={`h-4 w-4 border-2 rounded-full border-black mr-1 ${foulsClass} select-none`}></div>
                    <div className="select-none">{t('fouls')}</div>
                </div>
            </div>
        </div>
    )
}

export default Team
