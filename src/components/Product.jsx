import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex: 1;
    margin: 5px;
    height: 350px;
    min-width: 280px;
    justify-content: center;
    align-items: center;
    background-color: #f5fbfd;
    position: relative;
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;
const Image = styled.img`
    height: 75%;
    z-index: 2;
`;
const Info = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    z-index: 3;
    align-items: center;
    justify-content: center;
`;
const Icon = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;

const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    );
};

export default Product;
