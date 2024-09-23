import { Navbar } from "./Navbar"

export const Dashboard = () => {
    return (
        <>
            <div className="row">
                <Navbar/>
            </div>
            <div className="row">
                <div className="col-sm-2">
                    here
                </div>
                <div className="col-sm-8">
                    there
                </div>
            </div>
        </>
    )
}