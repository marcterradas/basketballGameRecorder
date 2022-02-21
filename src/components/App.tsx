import Scoreboard from './nav/Scoreboard'
import Main from './main/Main'
import Footer from './footer/Footer'
import Popup from './popup/Main'

function App(): JSX.Element {
    return (
        <div className="flex flex-wrap min-h-full">
            <Popup></Popup>
            <Scoreboard></Scoreboard>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}

export default App
