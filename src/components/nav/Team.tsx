import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import store from '../../store/store'
import { Team as TeamInterface } from '../../interfaces'

function Team(teamProps: TeamInterface): JSX.Element {
    const { t } = useTranslation()

    let team: TeamInterface = { ...teamProps }
    const logo: string = `/src/images/${team.logo}`
    const logoStyles: object = { backgroundImage: `url('${logo}')` }
    const containerFlexDirection: string = team.type == 'guest' ? 'flex-row-reverse' : ''

    const [score, setScore] = useState(team.score.toString().padStart(2, '0'))
    const [bonusClass, setBonusClass] = useState(team.bonus ? 'bg-green-600' : 'bg-red-600')
    const [possessionClass, setPossessionClass] = useState(team.possession ? 'bg-green-600' : 'bg-red-600')
    const [foulsClass, setFoulsClass] = useState(team.fouls ? 'bg-green-600' : 'bg-red-600')

    const getTeam = (): void => {
        team = team.type == 'local' ? store.getState().team.localTeam : store.getState().team.guestTeam
        setScore(team.score.toString().padStart(2, '0'))
        setBonusClass(team.bonus ? 'bg-green-600' : 'bg-red-600')
        setPossessionClass(team.possession ? 'bg-green-600' : 'bg-red-600')
        setFoulsClass(team.fouls ? 'bg-green-600' : 'bg-red-600')
    }

    store.subscribe(getTeam)

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
