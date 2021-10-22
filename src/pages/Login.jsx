import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)
        ),
        url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
            center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 20%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
    display: flex;
    font-size: 28px;
    font-weight: 250;
    align-items: center;
    justify-content: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    // align-items: center;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    padding: 10px;
    margin: 10px 0px;
`;

const Button = styled.button`
    align-self: center;
    width: 35%;
    border: none;
    padding: 15px 20px;
    cursor: pointer;
    background-color: #198d8d;
    color: white;
    margin-bottom: 10px;
    margin-top: 5px;
    &:hover {
        background-color: teal;
        color: white;
    }
`;
const Link = styled.a`
    align-self: center;
    margin: 5px 0px;
    font-size: 14px;
    cursor: pointer;
    text-decoration: underline;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Link>DO NOT REMEMBER YOUR PASSWORD ?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;
