import store from '../../../store/store'


import { Coach as CoachInteface } from '../../../interfaces'

function Coach(coach: CoachInteface): JSX.Element {
    const openPopup = (): void => {
        store.dispatch({ type: 'selectCoach', coachId: coach.id })
    }

    return (
        <div className="h-24 w-24 rounded-full border-2 shadow-lg flex items-center justify-center cursor-pointer select-none bg-green-200" onClick={openPopup}>
            {coach.name}
        </div>
    )
}

export default Coach
