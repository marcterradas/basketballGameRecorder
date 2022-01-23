import { Coach as CoachInteface } from '../../interfaces'

function Coach(coach: CoachInteface): JSX.Element {
    const openPopup = (): void => {
        console.log('open popup ...')
    }

    return (
        <div className="h-24 w-24 rounded-full border-2 border-black flex items-center justify-center cursor-pointer" onClick={openPopup}>
            {coach.name}
        </div>
    )
}

export default Coach
