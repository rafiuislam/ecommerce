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
        url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
            center;
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
    flex-wrap: wrap;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    padding: 10px;
    margin: 20px 10px 0px 0px;
`;

const Agreement = styled.span`
    font-size: 14px;
    margin: 20px 0px;
`;

const Button = styled.button`
    align-self: center;
    width: 35%;
    border: none;
    padding: 15px 20px;
    cursor: pointer;
    background-color: #198d8d;
    color: white;

    &:hover {
        background-color: teal;
        color: white;
    }
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="surname" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        By creating an account, I am agreeing to all the
                        <b> Terms & Conditions </b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;
