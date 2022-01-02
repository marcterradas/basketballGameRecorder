import { Team as TeamInterface } from '../../interfaces'

function Team(props: TeamInterface) {
    const logo: string = `/src/images/${props.logo}`
    const styles = {
        backgroundImage: `url('${logo}')`
    }
    return (
        <div className="border-2 border-rose-600 flex">
            <div>
                <div className="h-40 w-40 bg-contain bg-no-repeat bg-center" style={styles}></div>
                <div className="text-center">{props.name}</div>
            </div>
            <div>score ...</div>
        </div>
    )
}

export default Team
