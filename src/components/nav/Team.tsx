import { Team as TeamInterface } from '../../interfaces'

function Team(props: TeamInterface) {
    const logo: string = `/src/images/${props.logo}`

    return (
        <div className="team border-2 border-rose-600">
            <div className="image h-24 w-24">
                <img src={logo} alt="logo" className="object-contain" />
            </div>
            <div className="name">{props.name}</div>
        </div>
    )
}

export default Team
