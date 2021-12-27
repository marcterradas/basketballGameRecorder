import { Team as TeamInterface } from '../../interfaces'

function Team(props: TeamInterface) {
    console.log(props)
    const logo: string = `/src/images/${props.logo}`
    return (
        <div className="team">
            <div className="image h-40 w-40">
                <img src={logo} alt="logo" className="object-contain" />
            </div>
        </div>
    )
}

export default Team
