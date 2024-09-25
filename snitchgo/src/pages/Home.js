import { Navbar } from "../components/Navbar"
import Ranking from "../components/Ranking"
import Historique from "../components/Historique"
import ReportButton from "../components/ReportButton"

export const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container w-100 mx-auto" style={{ height: '89vh' }}>
                <div className="row h-100 justify-content-evenly">
                    <div className="col-4 my-4 rounded shadow" style={{ background: "#EAEAEB"}}>
                        <Ranking />
                    </div>
                    <div className="col-6 my-4 h-75 rounded shadow" style={{ background: "#EAEAEB"}}>
                        <Historique/>
                    </div>
                        <ReportButton></ReportButton>
                </div>
            </div >
        </>
    )
}