import React from 'react'
import { Button, Container, Nav, Navbar, } from 'react-bootstrap'
import './Header.css'
import { Icon } from '@iconify/react/dist/iconify.js'

function Header() {
    return (
        <>
      <Navbar expand="lg" className='mt-4'>
        <Container className='custom-container'>
          <Navbar.Brand href="#home">
            <img
              width='124px'
              alt=""
              src="/src/assets/EBrands.svg"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" className='z-1' />
          <Navbar.Collapse id="navbarScroll">

            <Nav id='nav1' className="navitems me-auto">
              <Nav.Link href="#home" className='ms-lg-0 ms-5'>Home</Nav.Link>
              <Nav.Link href="#about" className='ms-5'>Collection</Nav.Link>
              <Nav.Link href="#services" className='ms-5'>Sale</Nav.Link>
              <Nav.Link href="#services" className='ms-5 me-3'>FaQ</Nav.Link>
            </Nav>

            <Nav className=' btnnav'>
              <Button className='navbtn' variant="outline-dark"> <Icon className='carticon ms-' icon='meteor-icons:cart-shopping' /> <span className='ms-2'>24 product</span></Button>
              <Button className='navbtn ms-lg-4 ms-0' variant="outline-dark">$2265.75</Button>
            </Nav>

            <Nav>
              <Nav.Link className='navlogin text-center' href="#services">Log in <Icon className='ms-1' width={15} height={15} icon='ic:round-log-in' /> </Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    )
}

export default Header