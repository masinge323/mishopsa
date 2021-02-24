import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <Container>
        <hr className="FooterLine"/>
        <Row>
          <Col className='text-center py-3'>Copyright 2021 &copy; mishopsa
</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
