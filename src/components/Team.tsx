interface Props {
    type: string
}

function Team(props: Props) {
    return <div className="team">{props.type}</div>
}

export default Team
