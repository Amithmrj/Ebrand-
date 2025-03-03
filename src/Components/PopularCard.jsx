import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Card } from 'react-bootstrap'
import speaker from '../assets/speaker.svg'


function PopularCard() {
    return (
        <>
            <div>
                <Card className='border-0 card mt-2'>
                    <Card.Img className='px-5 pt-4' variant="top" src={speaker} />
                    <Card.Body>
                        <div className='p-2'>
                            <div className='d-flex justify-content-between'>
                                <h6>Lorem ipsum</h6>
                                <p className='text-danger fw-bold'>$200.00</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Reviews</p>
                                <div>
                                    <Icon className='staricon' icon='line-md:star-filled' width={22} height={22}></Icon>
                                    <Icon className='staricon' icon='line-md:star-filled' width={22} height={22}></Icon>
                                    <Icon className='staricon' icon='line-md:star-filled' width={22} height={22}></Icon>
                                    <Icon className='staricon' icon='line-md:star-filled' width={22} height={22}></Icon>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Re</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default PopularCard