import { Team as TeamInterface } from '../../interfaces'

function Team(props: TeamInterface) {
    const logo: string = `/src/images/${props.logo}`
    const logoStyles: object = {
        backgroundImage: `url('${logo}')`
    }
    const containerFlexDirection: string = props.type == 'guest' ? 'flex-row-reverse' : ''
    return (
        <div className={'flex ' + containerFlexDirection}>
            <div>
                <div className="h-40 w-40 bg-contain bg-no-repeat bg-center" style={logoStyles}></div>
                <div className="text-center">{props.name}</div>
            </div>
            <div>score ...</div>
        </div>
    )
}

export default Team
