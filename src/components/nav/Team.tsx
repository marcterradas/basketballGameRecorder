import { Team as TeamInterface } from '../../interfaces'

function Team(props: TeamInterface) {
    const logo: string = `/src/images/${props.logo}`
    const styles = {
        backgroundImage: `url('${logo}')`
    }
    console.log(styles)
    return (
        <div>
            <div className="h-40 w-40 bg-contain bg-no-repeat bg-center border-2 border-rose-600" style={styles}></div>
            <div className="name text-center">{props.name}</div>
        </div>
    )
}

export default Team
