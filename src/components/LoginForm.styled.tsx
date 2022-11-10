import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { NavBtnLink } from './NavBar.styled';

const FormCustom = styled(Form)`
    padding: 10px;
    width: 22rem;
    display: flex;
    flex-direction: column;
`

const LocalNavBtnLink = styled(NavBtnLink)`
    &:hover {
        background: #000;
        color: #fff;
    }
`

const Login = () => {
    const [details, setDetails] = useState({ username: "", password: "" })
    const [msg, setMsg] = useState("")

    const LogIn = async () => {
        localStorage.setItem("id", details.username)
        const res = await fetch('http://localhost:8000/login/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                id: details.username,
                password: details.password,
            })
        })
        const resJson = await res.json()
        if (res.status == 200) {
            localStorage.setItem("token", resJson.token)
        } else {
            setMsg(resJson.message)
        }
    }

    return (
        <FormCustom>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Enter username</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter username"
                    onChange={e => setDetails({ ...details, username: e.target.value })}
                />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={e => setDetails({ ...details, password: e.target.value })}
                />
            </Form.Group>
            <LocalNavBtnLink
                to='/'
                onClick={LogIn}
            >
                Login
            </LocalNavBtnLink>
            <Form.Text
                className="mb-5 text-danger"
            >
                {msg}
            </Form.Text>
        </FormCustom>
    )
}

export default Login;

