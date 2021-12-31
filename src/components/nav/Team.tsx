import { Team as TeamInterface } from '../../interfaces'

function Team(props: TeamInterface) {
    const logo: string = `/src/images/${props.logo}`

    return (
        <div>
            <div className="h-40 w-40 bg-contain bg-no-repeat bg-center bg-[url('/src/images/lakers.svg')] border-2 border-rose-600"></div>
            <div className="name">{props.name}</div>
        </div>
    )
}

export default Team
