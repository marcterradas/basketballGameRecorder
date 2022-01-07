import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function Timer(): JSX.Element {
    const { t } = useTranslation()

    const [start, setStart] = useState(true)
    const [paused, setPaused] = useState(false)
    const [timer, setTimer] = useState('10:00')
    const [period, setPeriod] = useState(1)

    const updateTimer = (): void => {
        console.log('update timer ...')
    }

    return (
        <div className="w-full">
            <div className="bold w-full text-center text-8xl pb-4 cursor-pointer select-none" onClick={updateTimer}>
                {start ? t('start') : timer}
            </div>
            <div className="w-full text-center">
                <div className="bold text-4xl select-none">{period}</div>
                <div className="select-none">{t('period')}</div>
            </div>
        </div>
    )
}

export default Timer
