import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

export default function Project({ project, index }) {
  const footer = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  };
  return (
    <Col xl={index === 0 ? 8 : 4}>
      <Card className="project__card mb-3 shadow">
        <Container fluid className=" p-0">
          <Card.Header>
            <a
              href={project.links.demo}
              title="Try it!"
              className="project__card-title"
            >
              <Card.Title>{project.title}</Card.Title>
            </a>
            {index === 1 && (
              <span className="text-muted">
                This app is hosted on Heroku and needs sometime to load
              </span>
            )}
          </Card.Header>
          <Row>
            <Col md={index === 0 ? 8 : 12}>
              <div className="w-100">
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Img
                    src={project.image}
                    className="project__card-img p-3"
                    title="Try it!"
                  />
                </a>
              </div>
            </Col>
            <Col md={index === 0 ? 4 : 12}>
              <Card.Body className="project__card-body">
                <p>{project.description}</p>
                <ul
                  className={`project__skills-list ${
                    index !== 0 && "project__skills-list-double"
                  }`}
                >
                  {project.skills.map((skill) => {
                    return <li>{skill}</li>;
                  })}
                </ul>
              </Card.Body>
            </Col>
          </Row>
        </Container>

        <div style={footer} className="p-3">
          <div className="d-flex w-100 justify-content-end">
            <a
              href={project.links.demo}
              target="__blank"
              className="p-1"
              title="Try it!"
              rel="noopener noreferrer"
            >
              <button className="btn btn--project-link">Demo</button>
            </a>
            <a
              className="p-1"
              href={project.links.github}
              target="__blank"
              title="View Source Code"
              rel="noopener noreferrer"
            >
              <button className="btn btn--project-link">
                {`Github `}
                <FaGithub />
              </button>
            </a>
          </div>
        </div>
      </Card>
    </Col>
  );
}
