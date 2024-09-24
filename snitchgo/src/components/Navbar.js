import {ReactComponent as Logo} from '../logo.svg'

export const Navbar = () => {
    return (
        <div className="max-w h-auto mb-3" style={{background: '#EAEAEB'}}>
            <div className="row">
                <div className="col-3">
                    <div className="col-1">
                        <a href="Home">
                            <Logo style={{width: '45px', 'margin-left': '15px'}}/>
                        </a>
                    </div>
                </div>
                <div className="row col-9">
                    <div className="col-2 mx-1 my-3">
                        hello
                    </div>
                    <div className="col-2 mx-1 my-3">
                        yooo    
                    </div>
                    <div className="col-5 mx-1 my-3"></div>
                    <div className="col-2 mx-1 my-3">
                        test
                    </div>
                </div>
            </div>
        </div>
    )
}