import styled from "styled-components"
import Login from "../components/LoginForm.styled"

const Page = styled.div`
    width: 100vw;
    height: calc(100vh - 80px);
    padding: 0rem calc(20vw / 2);
    display: grid;
    grid-template-columns: repeat(2, 1fr)
`

const CenterDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`

const LoginPage = () => {
    return (
        <Page>
            <CenterDiv>
                <div className="mb-5">
                    <h2>Khaja Bandanawaz University</h2>
                    <h5>Educating Humanity</h5>
                    <br />
                    <p>
                        We are a research oriented University focused and dedicated for
                        the betterment of humanity. Looking to contribute through each and
                        every member of the University, making every individual responsible
                        for the good of the nation. After research comes sustainability,
                        confidence building, skill development and physical fitness.
                    </p>

                    <p>
                        Through carefully designed courses at KBNU, students have
                        innumerable opportunities to emerge successful as Professionals in
                        Medicine, Engineering and Technology, Nursing, Education, Law,
                        Sports, Management and Entrepreneurship, and Religion.
                    </p>
                </div>
            </CenterDiv>
            <CenterDiv>
                <Login />
            </CenterDiv>
        </Page>
    )
}

export default LoginPage
