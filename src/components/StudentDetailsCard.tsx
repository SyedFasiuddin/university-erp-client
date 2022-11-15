import { Card, Col, Row, } from "react-bootstrap"

interface Props {
    usn?: String,
    name?: String,
    fathers_name: String,
    mothers_name: String,
    dob: String,
    address: String,
    phone_num: Number,
    email: String,
    department: String,
    last_qualification: String,
    qualified_from: String,
    passing_year: String,
    marks_scored: Number,
    percentage: Number,
    cet_rank: Number,
    neet_rank: Number,
    aadhar_number: Number,
    bank_account_number: Number,
}

const StudentDetailsCard = (props: Props) => {
    const DisplayRow = (key: String) => {
        return (
            <>
                <Row>
                    <Col xs={3}>{key}</Col>
                    {/* @ts-ignore */}
                    <Col className="text-muted">{props[key] || "-"}</Col>
                </Row>
                <hr />
            </>
        )
    }

    return (
        <Card style={{ minWidth: "40rem", margin: "1rem" }}>
            <Card.Body>
                {DisplayRow("fathers_name")}
                {DisplayRow("mothers_name")}
                {DisplayRow("dob")}
                {DisplayRow("address")}
                {DisplayRow("phone_num")}
                {DisplayRow("email")}
                {DisplayRow("department")}
                {DisplayRow("last_qualification")}
                {DisplayRow("qualified_from")}
                {DisplayRow("passing_year")}
                {DisplayRow("marks_scored")}
                {DisplayRow("percentage")}
                {DisplayRow("cet_rank")}
                {DisplayRow("neet_rank")}
                {DisplayRow("aadhar_number")}
                {DisplayRow("bank_account_number")}
            </Card.Body>
        </Card>
    )
}

export default StudentDetailsCard
