import { useState } from "react"
import Card from "react-bootstrap/Card"
import { Col, ListGroup, Row } from "react-bootstrap"

interface Marks {
    usn: String,
    name: String,
    subject_code: String,
    IA1?: Number,
    IA2?: Number,
    IA3?: Number,
    IA_average?: Number,
    external?: Number
}

const sampleMarks: Marks[] = [
{
    usn: "20KB02BS001",
    name: "Aadian",
    subject_code: "DBMS",
    IA1: 50,
    IA2: 49,
    IA3: 49,
    IA_average: 50,
    external: 100
},{
    usn: "20KB02BS001",
    name: "Aadian",
    subject_code: "DBMS",
    IA1: 50,
    IA2: 49,
    IA3: 49,
    IA_average: 50,
    external: 100
},{
    usn: "20KB02BS001",
    name: "Aadian",
    subject_code: "DBMS",
    IA1: 50,
    IA2: 49,
    IA3: 49,
    IA_average: 50,
    external: 100
},{
    usn: "20KB02BS001",
    name: "Aadian",
    subject_code: "DBMS",
}
]

const StudentMarksCard = () => {
    const [marks, setMarks] = useState(sampleMarks)

    const oneSubject = (props: Marks) => {
        return (
            <Card style={{ width: "18rem", height: "15.5rem", marginBottom: "1rem" }}>
              <Card.Header>{props.subject_code}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>{"IA1: " + (props.IA1 || "-")}</ListGroup.Item>
                <ListGroup.Item>{"IA2: " + (props.IA2 || "-")}</ListGroup.Item>
                <ListGroup.Item>{"IA3: " + (props.IA3 || "-")}</ListGroup.Item>
                <ListGroup.Item>{"IA average: " + (props.IA_average || "-")}</ListGroup.Item>
                <ListGroup.Item>{"External: " + (props.external || "-")}</ListGroup.Item>
              </ListGroup>
            </Card>
        )
    }

    return (
        <Card style={{ minWidth: "40rem", margin: "1rem" }}>
            <Card.Body style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridTemplateRows: "max-content"
            }}>
                {marks.map(item => oneSubject(item))}
            </Card.Body>
        </Card>
    )
}

export default StudentMarksCard
