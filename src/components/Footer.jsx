import {
    Facebook,
    GitHub,
    Instagram,
    MailOutline,
    Phone,
    Room,
    Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-right: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Social = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #${(props) => props.color};
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
    margin-right: 25px;
    ${mobile({ display: "none" })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Poothimala</Logo>
                <Desc>
                    Thank you so much for shopping with us. wherever you are, we
                    wish you more knowledge, good health, more wealth,
                    happiness, and successful life.The best website for the
                    treasure hunt we call shopping. They'll make finding this
                    season's must-have clothes and accessories a little easier.
                </Desc>
                <Social>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="24292F">
                        <GitHub />
                    </SocialIcon>
                </Social>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men</ListItem>
                    <ListItem>Women</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlists</ListItem>
                    <ListItem>Terms and Conditions</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: 10 }} /> Dhaka 1230, Bangladesh
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: 10 }} /> 01303664169
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: 10 }} />{" "}
                    md.rafiu.islam@g.bracu.ac.bd{" "}
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;
