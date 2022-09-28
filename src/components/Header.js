import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Homepage</Nav.Link>
          <Nav.Link href="/movielist">MovieList</Nav.Link>
          <Nav.Link href="/likelist">LikeList</Nav.Link>
          <Nav.Link href="/blocklist">Blocklist</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
