import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Nav from 'react-bootstrap/esm/Nav';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import FormControl from 'react-bootstrap/esm/FormControl';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col'
import { Link, useHistory } from 'react-router-dom';
import { useRef } from 'react';

const Header = () => {
    const searchInput = useRef(null);
    const history = useHistory();
    const getSearchInput = (e) => {
        e.preventDefault()        
        history.push(`/search/${searchInput.current.value}`)
        searchInput.current.value = null        
    }
    
    return <>
    <Navbar  bg="dark" expand="lg" variant="dark">
        <Container>               
            <Link to="/" className="navbar-brand fw-bold">            
                MovFlix 
            </Link>             
            <NavbarToggle aria-controls="movflix-navbar" />
            <Navbar.Collapse id="movflix-navbar">
            <Nav className="me-auto">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favs" className="nav-link">Favoritos</Link>                               
            </Nav>
            <Col xs={12} md={6} lg={4}>
                <form onSubmit= {getSearchInput}>                
                    <InputGroup>
                        <FormControl                        
                        placeholder="Busca una película"
                        aria-label="Busca una película"
                        aria-describedby="basic-addon2"
                        ref={searchInput}                    
                        />
                        <Button variant="outline-info" id="search-btn" className="ms-1" type="submit">
                            Buscar
                        </Button>                    
                    </InputGroup>
                    </form>                
            </Col>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
}
export default Header;