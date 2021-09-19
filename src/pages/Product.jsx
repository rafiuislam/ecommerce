import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;
const Title = styled.h1`
    font-weight: 250;
`;
const Desc = styled.p`
    margin: 30px 0px;
`;
const Price = styled.span`
    font-size: 40px;
    font-weight: 200;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 50px 0px;
    width: 40%;
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 4px;
    cursor: pointer;
`;
const FilterTitle = styled.span`
    font-size: 22px;
    font-weight: 300;
`;
const FilterSize = styled.select`
    padding: 4px;
    margin-left: 10px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    margin: 100px 0px;
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
`;

const Amount = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 1.2px solid teal;
    border-radius: 10px;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    background-color: white;
    border: 2px solid teal;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: #cce5e5;
    }
`;

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Jumpsuit</Title>
                    <Desc>
                        Jelly sweet roll jelly beans biscuit pie macaroon
                        chocolate donut. Carrot cake caramels pie sweet apple
                        pie tiramisu carrot cake. Marzipan marshmallow croissant
                        tootsie roll lollipop. Cupcake lemon drops bear claw
                        gummies. Jelly bear claw gummi bears lollipop cotton
                        candy gummi bears chocolate bar cake cookie. Cupcake
                        muffin danish muffin cookie gummies. Jelly beans
                        tiramisu pudding. Toffee soufflé chocolate cake pastry
                        brownie. Oat cake halvah sweet roll cotton candy
                        croissant lollipop. Macaroon tiramisu chocolate bar
                        candy candy carrot cake jelly sweet. Gummies croissant
                        macaroon dessert. Chocolate cake dragée pie.
                    </Desc>
                    <Price>$ 30</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="blue" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="black" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove style={{ marginRight: 10 }} />
                            <Amount>1</Amount>
                            <Add style={{ marginLeft: 10 }} />
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default Product;
