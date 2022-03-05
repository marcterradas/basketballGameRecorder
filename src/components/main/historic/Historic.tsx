import { useState } from 'react'

import store from '../../../store/store'
import { Historic as HistoricInterface } from '../../../interfaces'

function Historic(): JSX.Element {
    const [historic, setHistoric] = useState([])

    const printHistoric = (): void => {
        const newHistoric: Array<HistoricInterface> = store.getState().team.historic

        if (historic.length != newHistoric.length) {
            let index: number = 0

            for (index; index <= newHistoric.length; index++) {
                const historicElement: HistoricInterface = newHistoric[index]
            }

            setHistoric(newHistoric)
            unsubscribe()
        }
    }

    const unsubscribe = store.subscribe(printHistoric)

    return <div className="grow flex items-start justify-center"></div>
}

export default Historic
