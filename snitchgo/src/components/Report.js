export default function Report(props){
    let typeReport = "";
    switch (props.typeReport) {
        case "R":
            typeReport = "RETARD";
            break;
        case "A":
            typeReport = "ABSENT";
            break;
        default:
            typeReport = "RETARD";
            break;
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.name}, {typeReport}</h5>
                </div>
            </div>
        </>
    );
} 