import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './View.css'
import PopularCard from './PopularCard'


function View() {
    return (
        <>
            <div>
                <Row>
                    <Col sm={6} md={4} >
                        <PopularCard/>
                    </Col>
                    <Col sm={6} md={4} >
                        <PopularCard/>
                    </Col>
                    <Col sm={6} md={4} >
                        <PopularCard/>
                    </Col>
                    <Col sm={6} md={4} >
                        <PopularCard/>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default View