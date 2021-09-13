import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: column;
    background-color: #fcf5f5;
    justify-content: center;
    align-items: center;
`;
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;
const Description = styled.div`
    font-size: 27px;
    font-weight: 300;
    margin-bottom: 20px;
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
`;
const Input = styled.input`
    outline: none;
    border: none;
    flex: 8;
    padding-left: 15px;
`;
const Button = styled.button`
    flex: 1;
    border: none;
    color: white;
    background-color: teal;
    cursor: pointer;
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>
                Get updates on your favourite products on arrival
            </Description>
            <InputContainer>
                <Input placeholder="Your Email" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    );
};

export default Newsletter;
