import Header from './Header.jsx'
import Board from './Board.jsx'

function BotPage() {
    return (
        <div>
            <Header />
            <p>This is the bot page.</p>
            <Board gameMode={"pve"} onTurn={() => {}}/>
        </div>
    )
}

export default BotPage;