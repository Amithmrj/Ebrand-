import React from 'react'
import './SavingCard.css'
import { Card } from 'react-bootstrap'
import save1 from '../assets/save1.svg'
import { Icon } from '@iconify/react/dist/iconify.js'


function SavingCard() {
    return (
        <>
            <div>
                <Card className='border-0 card'>
                    <Card.Img className='pt-4' variant="top" src={save1} />
                    <div className='pt-2'>
                        <button className=' salebtn w-100 d-flex justify-content-between'>Up to 50%
                            <Icon className='my-auto' icon='maki:arrow'></Icon>
                        </button>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default SavingCard