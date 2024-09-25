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
                    <div className="col-4 my-4" style={{ background: "#EAEAEB", "borderRadius": '15px', 'boxShadow': 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                        <Ranking />
                    </div>
                    <div className="col-6 my-4 h-75" style={{ background: "#EAEAEB", "borderRadius": '15px', 'boxShadow': 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                        <Historique/>
                        <ReportButton/> 
                    </div>
                </div>
            </div >
        </>
    )
}