import ReportCard from "./ReportCard";
function ReportTab() {
    return (
        <>
            <ReportCard name = "Abdul Rehman" grade = "A" marks = {85} subjects = {["Physics", "Chemistry", "Urdu"]} />

            <ReportCard name = "Yousaf" grade = "F" marks = {67} subjects = {["Physics", "Chemistry", "Urdu"]} />
        </>
    );
}

export default ReportTab;