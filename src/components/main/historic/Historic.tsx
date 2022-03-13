import { useState } from 'react'

import store from '../../../store/store'
import { Historic as HistoricInterface } from '../../../interfaces'

import HistoricElement from './HistoricElement'

function Historic(): JSX.Element {
    const [historic, setHistoric] = useState([])
    const [historicElements, setHistoricElements] = useState([])

    const printHistoric = (): void => {
        const newHistoric: Array<HistoricInterface> = store.getState().team.historic
        const newHistoricElements: Array<JSX.Element> = []

        if (historic.length != newHistoric.length) {
            let index: number = 0

            for (index; index < newHistoric.length; index++) {
                const historicValue: HistoricInterface = newHistoric[index]
                historicValue.index = index
                const element: HistoricInterface = <HistoricElement key={index} {...historicValue}></HistoricElement>
                newHistoricElements.push(element)
            }

            setHistoricElements(newHistoricElements)
            setHistoric(newHistoric)
            unsubscribe()
        }
    }

    const unsubscribe = store.subscribe(printHistoric)

    return <div className="grow px-8 h-144 overflow-auto">{historicElements}</div>
}

export default Historic
