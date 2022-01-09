import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function Timer(): JSX.Element {
    const { t } = useTranslation()

    const [start, setStart] = useState(true)
    const [minutes, setMinutes] = useState(10)
    const [seconds, setSeconds] = useState(0)
    const [time, setTime] = useState('10:00')
    const [period, setPeriod] = useState(1)
    const [label, setLabel] = useState(t('start'))

    const clickTimer = (): void => {
        const isStart: boolean = !start
        setStart(isStart)
        setLabel(isStart ? t('start') : time)
    }

    const updateTime = (): void => {
        setSeconds(seconds == 0 ? 59 : seconds - 1)

        if (seconds == 0) {
            setMinutes(minutes - 1)
        }

        if (minutes == 0 && seconds == 0) {
            setStart(true)
            setPeriod(period + 1)
            setMinutes(10)
            setSeconds(0)
            setLabel(t('start'))
        }

        const minutesStr: string = minutes.toString().padStart(2, '0')
        const secondsStr: string = seconds.toString().padStart(2, '0')
        const timeStr: string = `${minutesStr}:${secondsStr}`

        setTime(timeStr)
        setLabel(timeStr)
    }

    const updateTimer = (): (() => void) | void => {
        if (!start) {
            // every second, update time
            const interval: number = setInterval(updateTime, 1000)
            return (): void => clearInterval(interval)
        }
    }

    useEffect(updateTimer, [start, minutes, seconds])

    return (
        <div className="w-full">
            <div className="bold w-full text-center text-8xl pb-4 cursor-pointer select-none" onClick={clickTimer}>
                {label}
            </div>
            <div className="w-full text-center">
                <div className="bold text-4xl select-none">{period}</div>
                <div className="select-none">{t('period')}</div>
            </div>
        </div>
    )
}

export default Timer
