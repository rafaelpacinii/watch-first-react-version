import { Container } from "./styles";
import logo from "../../assets/logo.svg"

export function Footer() {
    return(
        <Container>
            <img src={logo} alt="Watch First logo" />
            <small>© 2023 Watch First. All rights reserved.</small>
        </Container>
    );
}