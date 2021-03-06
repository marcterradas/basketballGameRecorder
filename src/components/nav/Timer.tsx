import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import store from '../../store/store'

function Timer(): JSX.Element {
    const { t } = useTranslation()
    const startLabel: string = 'start'

    const [start, setStart] = useState(true)
    const [minutes, setMinutes] = useState(10)
    const [seconds, setSeconds] = useState(0)
    const [time, setTime] = useState('10:00')
    const [period, setPeriod] = useState(1)
    const [label, setLabel] = useState(startLabel)

    const clickTimer = (): void => {
        const isStart: boolean = !start
        const label: string = minutes < 10 ? 'pause' : 'start'
        setStart(isStart)
        setLabel(isStart ? label : time)
        store.dispatch({ type: 'isInCountDown', inCountDown: !isStart })
    }

    const updateTime = (): void => {
        setSeconds(seconds == 0 ? 59 : seconds - 1)

        if (seconds == 0) {
            setMinutes(minutes - 1)
        }

        if (minutes == 0 && seconds == 0) {
            const newPeriod: number = period + 1
            setStart(true)
            setPeriod(newPeriod)
            setMinutes(10)
            setSeconds(0)
            setLabel('start')
            store.dispatch({ type: 'updatePeriod', period: newPeriod })
        }

        const minutesStr: string = minutes.toString().padStart(2, '0')
        const secondsStr: string = seconds.toString().padStart(2, '0')
        const timeStr: string = `${minutesStr}:${secondsStr}`

        setTime(timeStr)
        setLabel(timeStr)
        store.dispatch({ type: 'updateTime', minutes: minutes, seconds: seconds })
    }

    const updateTimer = (): (() => void) | void => {
        if (!start) {
            const oneSecond = 1000
            const interval: number = setInterval(updateTime, oneSecond)
            return (): void => clearInterval(interval)
        }
    }

    useEffect(updateTimer, [start, minutes, seconds])

    return (
        <div className="w-full">
            <div className="bold w-full flex items-center justify-center text-center pb-4">
                <div className="w-auto rounded-md text-8xl select-none cursor-pointer border-2 border-stone-500" onClick={clickTimer}>
                    {start ? t(label) : time}
                </div>
            </div>
            <div className="w-full text-center">
                <div className="bold text-4xl select-none">{period}</div>
                <div className="select-none">{t('period')}</div>
            </div>
        </div>
    )
}

export default Timer
