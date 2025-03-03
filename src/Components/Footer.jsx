import React from 'react'
import '../Components/Footer.css'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import ebrand from '../assets/EBrands.svg'

function Footer() {
  return (
    <>
      <div>
        <div className='newsletter d-flex justify-content-center align-items-center'>

          <Icon icon='material-symbols:news-outline-rounded' width={96} height={96} style={{ color: 'white' }}></Icon>
          <div className='ms-3'>
            <h3 className='letter'>Join our newsletter now!</h3>
            <p className='text-white'>Register now and get our latest updates and promos.</p>
          </div>

          <InputGroup className="mb-3 ps-5 footerform">
            <Form.Control
            type='email'
              placeholder="Enter Your Email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="dark" id="button-addon2">
              Join
            </Button>
          </InputGroup>
        </div>

        <div className='footer'>
          <Row>
            <Col md={6}>
              <div>
                <img src={ebrand} alt="" />
                <div className='mt-4 footertxt'>
                  <div className='col-12 col-lg-9'>
                    <p className='mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste voluptate quod veritatis voluptatum laborum distinctio.</p>
                  </div>
                  <div className='d-flex mb-3'>
                    <Icon icon='mingcute:phone-line' width={20} height={20} className='my-auto footricon'></Icon>
                    <p className='m-0 ms-1'>+1234567890</p>
                  </div>
                  <div className='d-flex'>
                    <Icon icon='material-symbols:mail-outline-rounded' width={20} height={20} className='my-auto footricon'></Icon>
                    <p className='m-0 ms-1'>+1234567890</p>
                  </div>
                </div>

              </div></Col>
            <Col md={2}><h4 className='ftrhead'>Company</h4>
              <div className='d-flex flex-column mt-4 footertxt'>
                <a href="#" className='text-decoration-none text-secondary'>About</a>
                <a href="#" className='text-decoration-none text-secondary mt-2'>Products</a>
                <a href="#" className='text-decoration-none text-secondary mt-2'>Contact</a>
                <a href="#" className='text-decoration-none text-secondary mt-2'>Blog</a>
                <a href="#" className='text-decoration-none text-secondary mt-2'>Careers</a>
              </div>
            </Col>
            <Col md={2}><h4 className='ftrhead'>Information</h4>
              <div className='d-flex flex-column mt-4 footertxt'>
                <a href="#" className='text-decoration-none text-secondary'>Help Center</a>
                <a href="#" className='text-decoration-none text-secondary mt-2'>Payment Methods</a>
                <a href="#" className='text-decoration-none text-secondary mt-2'>Return & Refund</a>
                <a href="#" className='text-decoration-none text-secondary mt-2'>Privacy Policy</a>
              </div>
            </Col>
            <Col md={2}>
              <h4 className='ftrhead'>Follow us</h4>
              <div className='d-flex mt-4'>
                <div className="followicon rounded opacity-50 text-light text-center py-2"><Icon icon='hugeicons:instagram' width={33} height={33}></Icon></div>
                <div className="followicon rounded ms-3 opacity-50 text-light text-center py-2"><Icon icon='hugeicons:twitter' width={33} height={33}></Icon></div>
                <div className="followicon rounded ms-3 opacity-50 text-light text-center py-2"><Icon icon='fe:facebook' width={33} height={33}></Icon></div>
              </div>
            </Col>
          </Row>

          <hr/>
          <div className='d-flex justify-content-between'>
            <p className='copyrighttxt'>Copyright © 2021 Tronix. All Right Reseved</p>
            <div>
              <Icon icon='ri:mastercard-line' width={32} height={32}></Icon>
              <Icon icon='ri:visa-fill' width={32} height={32} className='ms-2'></Icon>
              <Icon icon='hugeicons:paypal' width={32} height={32} className='ms-2'></Icon>
            </div>
          </div>


        </div>

          

      </div>
    </>
  )
}

export default Footer