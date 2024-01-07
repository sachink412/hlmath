import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-black text-light text-center text-lg-start">
      <Container className="p-4">
        <Row>
          <Col lg={6} md={12} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Footer Content</h5>

            <p>
              Here you can use rows and columns to organize your footer content.
            </p>
          </Col>
        </Row>
      </Container>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {new Date().getFullYear()} Higher Level Mathematics
      </div>
    </footer>
  );
};

export default Footer;
