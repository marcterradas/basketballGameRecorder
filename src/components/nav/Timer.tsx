import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function Timer(): JSX.Element {
    const { t } = useTranslation()

    const [start, setStart] = useState(true)
    const [counter, setCounter] = useState(10)
    const [period, setPeriod] = useState(1)

    const clickTimer = (): void => {
        setStart(!start)
    }

    const updateTimer = () => {
        if (!start && counter > 0) {
            const timer: number = setInterval(() => setCounter(counter - 1), 1000)
            return (): void => clearInterval(timer)
        }
    }

    useEffect(updateTimer, [start, counter])

    return (
        <div className="w-full">
            <div className="bold w-full text-center text-8xl pb-4 cursor-pointer select-none" onClick={clickTimer}>
                {start ? t('start') : counter}
            </div>
            <div className="w-full text-center">
                <div className="bold text-4xl select-none">{period}</div>
                <div className="select-none">{t('period')}</div>
            </div>
        </div>
    )
}

export default Timer
