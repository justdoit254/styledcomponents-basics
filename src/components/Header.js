import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styles"
import { Container } from "./styles/Container.styles"
import { Button } from "./styles/Button.styles"
import { Flex } from "./styles/Flex.styles"

const Header = () => (
    // <header>                 //without styled components
    //     <h1>Hubble</h1>
    // </header>

    // <StyledHeader>           //with styled components
    //     <h1>Hubble</h1>
    // </StyledHeader>

    // <StyledHeader bg = 'red'>    //passing props             
    //     <h1>Hubble</h1>
    // </StyledHeader>

    // <StyledHeader>               // With theme provider   
    //     <h1>Hubble</h1>
    // </StyledHeader>


    <StyledHeader>  
        <Container>
            <Nav>
                <Logo src='./images/logo.svg' alt='Logo' />
                <Button>Try it Free</Button>
            </Nav>

            <Flex>
                <div>
                    <h1>Build The Community Your Fans Will Love</h1>
                    <p>Huddle re-imagines the way we build communities. You have a voice,
                    but so does your audience. Create connections with your users as
                    you engage in genuine discussion.</p>
                    <Button bg='#ff0099' color="#fff">Get Started For Free</Button>
                </div>
                <Image src='./images/illustration-mockups.svg' />
            </Flex>
        </Container>            
    </StyledHeader>
)

export default Header