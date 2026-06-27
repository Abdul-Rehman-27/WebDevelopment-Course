import "./ReportCard.css";
function ReportCard({name, grade, marks, subjects, isPassed = true}) {

    let bgColor = marks >= 80 ? "lightgreen" : marks < 50 ? "red" : "white";
    let styles = { backgroundColor: bgColor };

    return (
        <div className="ReportCard" style={styles}>
            <h3>Student Report</h3>
            <p>Name: {name}</p>
            <p>Grade: {grade}</p>
            <p>Pass: {isPassed ? marks : "Fail"}</p>
            <h4>Subjects</h4>
            <ul>
                {subjects.map((subject, index) => (
                    <li key={index}>{subject}</li>
                ))}
            </ul>

        </div>
    );
}

export default ReportCard;