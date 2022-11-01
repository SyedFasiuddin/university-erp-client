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
    return (
        <FormCustom>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Enter username</Form.Label>
                <Form.Control type="email" placeholder="Enter username" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <LocalNavBtnLink className="mb-5" to='/'>
                Submit
            </LocalNavBtnLink>
        </FormCustom>
    )
}

export default Login;

