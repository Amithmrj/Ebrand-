import React from 'react'
import './Itemcard.css'
import { Card } from 'react-bootstrap'
import { Icon } from '@iconify/react/dist/iconify.js'
import watch from '../assets/watch.svg'


function Itemcard() {
    return (
        <>
            <Card className='rounded-0'>
                                <Card.Img variant="top" src={watch} className='px-3' />
                                <div className='p-2'>
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
                                        <p>$9.99 <sup><s>$9.99</s></sup></p>
                                        <div className='cartdiv text-center'>
                                            <Icon icon='material-symbols:shopping-cart-outline-rounded' width={20} height={20}></Icon>
                                        </div>
                                    </div>
                                </div>
                            </Card>
        </>
    )
}

export default Itemcard