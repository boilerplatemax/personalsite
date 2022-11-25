import React from "react";

import { Container, Row } from "react-bootstrap";
import Project from "../components/Project";
import { projects } from "../data/projectdata";

export default function ProjectsPage() {
  return (
    <div>
      <Container>
        <Row className="pt-3">
          {projects.map((project, index) => {
            return <Project key={project.id} project={project} index={index} />;
          })}
        </Row>
      </Container>
    </div>
  );
}
