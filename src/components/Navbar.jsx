import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 60px;
`;

const Wapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    flex: 1;
`;
const Logo = styled.h1`
    font-weight: bold;
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    outline: none;
    border: none;
    width: 300px;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    margin-right: 30px;
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;

const Navbar = () => {
    return (
        <Container>
            <Wapper>
                <Left>
                    <Logo>Poothimala.</Logo>
                </Left>
                <Center>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search
                            style={{
                                color: "gray",
                                fontSize: 16,
                                cursor: "pointer",
                            }}
                        />
                    </SearchContainer>
                </Center>
                <Right>
                    <Language>EN</Language>
                    <MenuItem> REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wapper>
        </Container>
    );
};

export default Navbar;
