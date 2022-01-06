import { useTranslation } from 'react-i18next'

function Timer(): JSX.Element {
    const { t } = useTranslation()

    const timer: string = '10:00'
    const period: number = 1

    return (
        <div className="w-full">
            <div className="bold w-full text-center text-8xl pb-4">{timer}</div>
            <div className="w-full text-center">
                <div className="bold text-4xl">{period}</div>
                <div>{t('period')}</div>
            </div>
        </div>
    )
}

export default Timer
