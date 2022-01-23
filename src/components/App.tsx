import Scoreboard from './nav/Scoreboard'
import Main from './main/Main'
import Footer from './footer/Footer'

function App(): JSX.Element {
    return (
        <div className="flex flex-wrap border-2 border-rose-600">
            <Scoreboard></Scoreboard>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}

export default App
