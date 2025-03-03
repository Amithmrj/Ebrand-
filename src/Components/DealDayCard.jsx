import React from 'react'
import './DealDayCard.css'
import { Card, ProgressBar } from 'react-bootstrap'
import { Icon } from '@iconify/react/dist/iconify.js'
import sneaker from '../assets/sneaker.svg'



function DealDayCard() {
    return (
        <>
            <div>
                <Card className='rounded-0 border-0 bg-white mt-4' style={{minWidth:'350px',maxWidth:'500px'}}>
                    <Card.Img variant="top" src={sneaker} className='px-4' />
                    <Card.Body>
                        <div className='d-flex justify-content-between'>
                            <ProgressBar className='rounded-0 progress my-auto' variant='progress1' now={40} />
                            <p className='my-auto'>Sold: 12/30</p>
                        </div>
                    </Card.Body>
                    <div className='p-2 pt-0'>
                        <div >
                            <p className='cardtxt'> Mrs. Wages Pickled Okra and Vegetables Quick</p>
                        </div>
                        <div className='d-flex carddivs mt-2'>
                            <Icon className='staricon' icon='line-md:star-filled' width={22} height={22}></Icon>
                            <Icon className='staricon' icon='line-md:star-filled' width={22} height={22}></Icon>
                            <Icon className='staricon' icon='line-md:star-filled' width={22} height={22}></Icon>
                            <Icon className='staricon' icon='line-md:star-filled' width={22} height={22}></Icon>
                            <Icon className='staricon' icon='line-md:star-filled' width={22} height={22}></Icon>
                            <p className='ps-2'>(5.0)</p>
                        </div>
                        <div className='d-flex justify-content-between cardftr mt-1'>
                            <p>$9.99</p>
                            <div className='cartdiv text-center'>
                                <Icon icon='material-symbols:shopping-cart-outline-rounded' width={20} height={20}></Icon>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default DealDayCard