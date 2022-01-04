import { useTranslation } from 'react-i18next'

import { Team as TeamInterface } from '../../interfaces'

function Team(props: TeamInterface) {
    const logo: string = `/src/images/${props.logo}`
    const logoStyles: object = {
        backgroundImage: `url('${logo}')`
    }
    const containerFlexDirection: string = props.type == 'guest' ? 'flex-row-reverse' : ''
    const score: string = '22'
    const { t } = useTranslation()

    return (
        <div className={'flex ' + containerFlexDirection}>
            <div>
                <div className="h-40 w-40 bg-contain bg-no-repeat bg-center" style={logoStyles}></div>
                <div className="text-center">{props.name}</div>
            </div>
            <div className="bold h-40 w-40 flex items-center justify-center text-center">{score}</div>
            <div className="flex flex-wrap items-center justify-center">
                <div className="w-full flex items-center">
                    <div className="h-4 w-4 border-2 rounded-full border-rose-600 mr-1"></div>
                    <div>{t('bonus')}</div>
                </div>
                <div className="w-full flex items-center">
                    <div className="h-4 w-4 border-2 rounded-full border-rose-600 mr-1"></div>
                    <div>{t('possession')}</div>
                </div>
                <div className="w-full flex items-center">
                    <div className="h-4 w-4 border-2 rounded-full border-rose-600 mr-1"></div>
                    <div>{t('fouls')}</div>
                </div>
            </div>
        </div>
    )
}

export default Team
