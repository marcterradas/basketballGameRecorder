import Scoreboard from './nav/Scoreboard'
import Main from './main/Main'
import Footer from './footer/Footer'

function App(): JSX.Element {
    return (
        <div className="flex flex-wrap min-h-full">
            <Scoreboard></Scoreboard>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}

export default App
