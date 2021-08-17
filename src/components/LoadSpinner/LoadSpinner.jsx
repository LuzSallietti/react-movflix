import Spinner from "react-bootstrap/esm/Spinner";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const LoadSpinner = () => {
    return <>
    <Row className="m-4">
        <Col sm={6} className="text-center">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner> 
        </Col>
    </Row>
    </>
}
export default LoadSpinner;