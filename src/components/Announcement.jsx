import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 40px;
    background-color: teal;
    color: white;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Announcement = () => {
    return (
        <Container>
            Mega Sale!! Free Shipping on orders more than $100
        </Container>
    );
};

export default Announcement;
