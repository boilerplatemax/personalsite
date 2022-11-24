import React from 'react'
import { Spinner,Container } from 'react-bootstrap'
export default function Loading() {
  return (
    <Container>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </Container>
  )
}
