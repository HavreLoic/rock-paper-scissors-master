import { useContext } from "react"
import { GameCard, Header, Rules, GameCardHandSelection } from "./Components"
import { GameContext } from "./Context"

function App() {
  const { gameSectionUI } = useContext(GameContext)

  return (
    <div className="p-10">
      <Header />
      {gameSectionUI === false && <GameCard />}
      {gameSectionUI === true && <GameCardHandSelection />}
      <Rules />
    </div>
  )
}

export default App
