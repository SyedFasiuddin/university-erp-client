import styled from "styled-components"
import { Button, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import LecturersDetailsCard from "../components/LecturersDetailsCard"

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

interface Lecturers {
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

const sampleLecturer: Lecturers = {
    lecturer_id: "A001",
    name: "Lecturer Name",
    fathers_name: "Father",
    spouse_name: "Spouse",
    phone_num: 9283928,
    dob: (new Date("12/01/2001")).toLocaleDateString(),
    email: "name@email.com",
    address: "Some random address",
    qualification: "PhD",
    subject_expertise: "Design and Analysis of Algorithms",
    department: "BECSE",
    experience: 6,
    aadhar_number: 92382983,
    pan_number: 83473892,
    bank_account_number: 39408329,
    pay_scale: 928302,
    basic_pay: 238928,
    gross_salary: 9283902,
    deduction: 928392,
    net_salary: 928392,
}
const LecturersPage = () => {
    const [lecturer, setLecturer] = useState(sampleLecturer)
    const [detailsTab, setDetailsTab] = useState(true)
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate("/")
    }

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
                    if (!data.lecturer) navigate("/students")
                    else {
                        fetch("http://localhost:8000/lecturers/" + id, {
                            headers: {
                                "Authorization": "bearer " + localStorage.getItem("token")
                            }
                        })
                            .then(res => res.json())
                            .then(data => setLecturer(data))
                            .catch(e => console.log(e))
                    }
                })
                .catch(e => console.log(e))
        }
    }, [])

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
                        usn: {lecturer.lecturer_id || "-"}
                        <hr />
                        name: {lecturer.name || "-"}
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
                detailsTab ? <LecturersDetailsCard {...lecturer} /> : <div>show subject details</div>
            }
        </Page>
    )
}

export default LecturersPage
