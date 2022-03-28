import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import store from '../../store/store'
import { Team as TeamInterface } from '../../interfaces'

function Team(teamProps: TeamInterface): JSX.Element {
    const { t } = useTranslation()

    let team: TeamInterface = { ...teamProps }
    const containerFlexDirection: string = team.type == 'guest' ? 'flex-row-reverse' : ''

    const [score, setScore] = useState(team.score.toString().padStart(2, '0'))
    const [bonusClass, setBonusClass] = useState(team.bonus ? 'bg-green-600' : 'bg-red-600')
    const [possessionClass, setPossessionClass] = useState(team.possession ? 'bg-green-600' : 'bg-red-600')
    const [foulsClass, setFoulsClass] = useState(team.fouls ? 'bg-green-600' : 'bg-red-600')

    const getTeam = (): void => {
        team = team.type == 'local' ? store.getState().team.localTeam : store.getState().team.guestTeam

        const newScoreValue: string = team.score.toString().padStart(2, '0')
        const newBonusValue: string = team.bonus ? 'bg-green-600' : 'bg-red-600'
        const newPossessionValue: string = team.possession ? 'bg-green-600' : 'bg-red-600'
        const newFoulsValue: string = team.fouls ? 'bg-green-600' : 'bg-red-600'

        if (score != newScoreValue) {
            setScore(newScoreValue)
            unsubscribe()
        }

        if (bonusClass != newBonusValue) {
            setBonusClass(team.bonus ? 'bg-green-600' : 'bg-red-600')
            unsubscribe()
        }

        if (possessionClass != newPossessionValue) {
            setPossessionClass(team.possession ? 'bg-green-600' : 'bg-red-600')
            unsubscribe()
        }

        if (foulsClass != newFoulsValue) {
            setFoulsClass(team.fouls ? 'bg-green-600' : 'bg-red-600')
            unsubscribe()
        }
    }

    const unsubscribe = store.subscribe(getTeam)

    return (
        <div className={`flex ${containerFlexDirection}`}>
            <div>
                <div className={`h-40 w-40 bg-contain bg-no-repeat bg-center ${team.type}`}></div>
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
