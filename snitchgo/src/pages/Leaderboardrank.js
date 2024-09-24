import { Navbar } from "../components/Navbar"
import Ranking from "../components/Ranking"

export const Leaderboardrank = () => {
    return (
        <>
        <Navbar />
            <div className="row h-100 w-100">
                <Ranking></Ranking>

            </div>
            
        </>
    )
}

export default Leaderboardrank;