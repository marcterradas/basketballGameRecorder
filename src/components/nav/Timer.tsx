import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function Timer(): JSX.Element {
    const { t } = useTranslation()

    const [start, setStart] = useState(true)
    const [time, setTime] = useState(10)
    const [period, setPeriod] = useState(1)

    const clickTimer = (): void => {
        setStart(!start)
    }

    const updateTime = (): void => {
        setTime(time - 1)
    }

    const updateTimer = (): (() => void) | void => {
        if (!start && time > 0) {
            // every second, update time
            const interval: number = setInterval(updateTime, 1000)
            return (): void => clearInterval(interval)
        }
    }

    useEffect(updateTimer, [start, time])

    return (
        <div className="w-full">
            <div className="bold w-full text-center text-8xl pb-4 cursor-pointer select-none" onClick={clickTimer}>
                {start ? t('start') : time}
            </div>
            <div className="w-full text-center">
                <div className="bold text-4xl select-none">{period}</div>
                <div className="select-none">{t('period')}</div>
            </div>
        </div>
    )
}

export default Timer
