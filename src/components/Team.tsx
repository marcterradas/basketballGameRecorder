import { Team as TeamInterface } from '../interfaces'

function Team(props: TeamInterface) {
    console.log(props)
    return <div className="team">{props.type}</div>
}

export default Team
