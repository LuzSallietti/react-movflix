import Container from "react-bootstrap/esm/Container"

const Footer = () => {
    return <>
    <footer className="bg-dark p-3 fixed-bottom">
        <Container>
            <p className="text-white text-center mb-0"><span className="fw-bold">MovFlix</span> - All rights reserved - 2021</p>
        </Container>
    </footer>
    </>
}
export default Footer;