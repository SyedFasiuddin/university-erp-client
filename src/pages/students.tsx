import { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import StudentDetailsCard from "../components/StudentDetailsCard"
import StudentMarksCard from "../components/StudentMardsCard"

const Page = styled.div`
    // width: 100vw;
    // min-height: calc(100vh - 80px);
    min-height: 100vh;
    padding: 0rem calc(20vw / 2);
    padding: 0rem auto;
    background-color: #ededed;
    display: grid;
    grid-template-columns: 0.3fr 0.7fr;
`

const Div = styled(Card)`
    background-color: #fff;
    margin: 1rem;
`

const CustomButton = styled(Button)`
    margin: 1rem;
    padding: 0.7rem;
    background: #256ce1;

    &:hover {
        background: #000;
        color: #fff;
    }
`

interface Student {
    usn: String,
    name: String,
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

const sampleStudent: Student = {
    usn: "20KB02BS[001]",
    name: "Tom Cruise",
    fathers_name: "Timothy Maven",
    mothers_name: "Amy Malik",
    dob: (new Date("12/01/2001")).toLocaleDateString(),
    address: "Some random address",
    phone_num: 829729320,
    email: "example@email.com",
    department: "ME",
    last_qualification: "PUC",
    qualified_from: "Some college",
    passing_year: (new Date("2017")).toLocaleDateString(),
    marks_scored: 600,
    percentage: 94,
    cet_rank: 2000,
    neet_rank: 10000,
    aadhar_number: 829743928374,
    bank_account_number: 13924729830942,
}

const StudentPage = () => {
    const [student, setStudent] = useState(sampleStudent)
    const [detailsTab, setDetailsTab] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const id = localStorage.getItem("id")
        if (!id) navigate("/")
        else {
            fetch("http://localhost:8000/login/whois", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.lecturer) navigate("/lecturers")
                    else {
                        fetch("http://localhost:8000/students/" + id, {
                            headers: {
                                "Authorization": "bearer " + localStorage.getItem("token")
                            }
                        })
                            .then(res => res.json())
                            .then(data => setStudent(data))
                            .catch(e => console.log(e))
                    }
                })
                .catch(e => console.log(e))
        }
    }, [])

    const logout = () => {
        localStorage.clear()
        navigate("/")
    }

    return (
        <Page>
            <Div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "5rem",
                    marginBottom: "3rem"
                }}>
                    <img src="https://via.placeholder.com/150" style={{ borderRadius: "50%" }} />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <div style={{ padding: "0.8rem" }}>
                        usn: {student.usn || "-"}
                        <hr />
                        name: {student.name || "-"}
                    </div>
                    <CustomButton onClick={() => {
                        setDetailsTab(true)
                    }}>
                        Details
                    </CustomButton>
                    <CustomButton onClick={() => {
                        setDetailsTab(false)
                    }}>
                        Marks
                    </CustomButton>
                    <CustomButton onClick={logout}>
                        Logout
                    </CustomButton>
                </div>
            </Div>
            {
                detailsTab ? <StudentDetailsCard {...student} /> :
                    <StudentMarksCard />
            }
        </Page>
    )
}

export default StudentPage
