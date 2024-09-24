import { Dashboard } from "../components/Dashboard"
import Ranking from "../components/Ranking"

export const Leaderboardrank = () => {
    return (
        <>
            <Dashboard/>
            <div className="row h-100 w-100">
                <Ranking></Ranking>

            </div>
            
        </>
    )
}

export default Leaderboardrank;