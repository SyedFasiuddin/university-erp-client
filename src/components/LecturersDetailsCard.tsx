import { Card, Col, Row } from "react-bootstrap"

interface Props {
    lecturer_id: String,
    name: String,
    fathers_name: String,
    spouse_name: String,
    phone_num: Number,
    dob: String,
    email: String,
    address: String,
    qualification: String,
    subject_expertise: String,
    department: String,
    experience: Number,
    aadhar_number: Number,
    pan_number: Number,
    bank_account_number: Number,
    pay_scale: Number,
    basic_pay: Number,
    gross_salary: Number,
    deduction: Number,
    net_salary: Number,
}

const LecturersDetailsCard = (props: Props) => {
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
        <Card style={{minWidth: "40rem", margin: "1rem"}}>
            <Card.Body>
                {DisplayRow("fathers_name")}
                {DisplayRow("spouse_name")}
                {DisplayRow("phone_num")}
                {DisplayRow("dob")}
                {DisplayRow("email")}
                {DisplayRow("address")}
                {DisplayRow("qualification")}
                {DisplayRow("subject_expertise")}
                {DisplayRow("department")}
                {DisplayRow("experience")}
                {DisplayRow("aadhar_number")}
                {DisplayRow("pan_number")}
                {DisplayRow("bank_account_number")}
                {DisplayRow("pay_scale")}
                {DisplayRow("basic_pay")}
                {DisplayRow("gross_salary")}
                {DisplayRow("deduction")}
                {DisplayRow("net_salary")}
            </Card.Body>
        </Card>
    )
}

export default LecturersDetailsCard
