import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import courses from "../assets/HomePageData.json";

const HomePage = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        {courses.map((course) => (
          <Col md="auto" key={course.title}>
            <Card className="border-top border-bottom">
              <Card.Body>
                <Card.Title className="display-4">{course.title}</Card.Title>
                <Card.Text className="lead">{course.description}</Card.Text>
                <Link to={course.link} className="btn btn-primary">
                  Learn More
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
