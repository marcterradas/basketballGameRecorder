import { useTranslation } from 'react-i18next'

function Timer(): JSX.Element {
    const { t } = useTranslation()

    const timer: string = '10:00'
    const period: number = 1

    return (
        <div className="w-full">
            <div className="bold w-full text-center">{timer}</div>
            <div className="w-full text-center">
                <div className="bold">{period}</div>
                <div></div>
            </div>
        </div>
    )
}

export default Timer
