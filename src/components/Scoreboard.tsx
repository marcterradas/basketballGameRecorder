import Team from './Team'

function Scoreboard() {
    return (
        <div className="border-2 border-rose-600">
            <Team type="local"></Team>
            <div className="timer">timer</div>
            <Team type="guest"></Team>
        </div>
    )
}

export default Scoreboard
