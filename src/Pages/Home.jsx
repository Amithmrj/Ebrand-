import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Home.css'
import { Icon } from '@iconify/react/dist/iconify.js'
import View from '../Components/View'
import Itemcard from '../Components/Itemcard'
import DealDayCard from '../Components/DealDayCard'
import SavingCard from '../Components/SavingCard'


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


function Home() {
    let w = window.innerWidth;
    console.log(w);

    const [swiperRef, setSwiperRef] = useState(null);
    const [swiperRef1, setSwiperRef1] = useState(null);
    const [swiperRef2, setSwiperRef2] = useState(null);


    console.log(swiperRef);



    return (
        <>
            <Container className='custom-container'>
                <div className='d-flex justify-content-center'>
                    <Row className='mainrow'>
                        <Col md={7}>
                            <input placeholder='Search' className='form-control searchbar mt-2' type="text" />
                            <div className='mt-4 d-none d-md-flex flex-wrap justify-content-center gap-3'>
                                <button className='btn btn-outline-secondary topbtn '>Category</button>
                                <button className='btn btn-outline-secondary topbtn '>Category</button>
                                <button className='btn btn-outline-secondary topbtn '>Category</button>
                                <button className='btn btn-outline-secondary topbtn '>Category</button>
                            </div>
                            <h1 className='main-heading mt-md-4 mt-2'>
                                All <span id='h1span'>Modern Style</span> <br />
                                Product Available <br />
                                Here
                            </h1>
                            <p className='h1text'>Lorem ipsum dolor sit amet, consectetur adipisicing. Perferendis illum iure minus magni corporis vel sequi vitae beatae cum dolore est.</p>
                            <button className='bttn'>Shop Now</button>
                        </Col>
                        {/* <Col className='border' md={1}>sfsfs</Col> */}
                        <Col className=' mt-5' md={5}>
                            <div className=" d-flex justify-content-center align-items-center" >
                                
                                
                                <div className='' style={{ position: 'relative' }}>
                                <div id='offbadge' className=' text-center bg-white rounded shadow'>
                                    <h6 className='offbadgehd'>Get Up To 30% Off</h6>
                                    <div className='px-3'>
                                        <p className='offbadgetxt'>Lorem ipsum dolor sit amet consectetur, Et consequatur eos officia veritatis aut eaque necessitatibus odio?</p>
                                    </div>
                                </div>
                                    <div className='h1circle1 d-flex justify-content-center align-items-center '>
                                        <div className='h1circle2'>
                                        </div>
                                        <div id='imgdiv' style={{ position: 'absolute', top:'-100px'}}>
                                    <img className='bannerimg' src="./src/assets/levitating-music-headphones-display 1.svg" alt="" width={500} />
                                </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <h1 className='highlighth1'>Highlighted Deals of the Week</h1>
                <Row>
                    <Col md={8}>
                        <div className='carddiv'>


                            <Swiper
                                modules={[Navigation]}
                                onSwiper={(swiper) => setSwiperRef(swiper)}

                                spaceBetween={0}
                                slidesPerGroup={1}
                                loop={false}
                                breakpoints={{
                                    320: { slidesPerView: 1, slidesPerGroup: 1 }, // Mobile devices
                                    640: { slidesPerView: 2, slidesPerGroup: 2 }, // Tablets
                                    1024: { slidesPerView: 4, slidesPerGroup: 3 }, // Laptops and larger screens
                                }}>
                                <SwiperSlide><Itemcard /></SwiperSlide>
                                <SwiperSlide><Itemcard /></SwiperSlide>
                                <SwiperSlide><Itemcard /></SwiperSlide>
                                <SwiperSlide><Itemcard /></SwiperSlide>
                                <SwiperSlide><Itemcard /></SwiperSlide>
                                <SwiperSlide><Itemcard /></SwiperSlide>
                            </Swiper>

                            <div className='d-flex justify-content-between'>
                                <button onClick={() => swiperRef?.slidePrev()} className='btn rounded p-2'>
                                    <Icon icon='solar:round-alt-arrow-left-outline' width={25} height={25}></Icon>
                                </button>
                                <button onClick={() => swiperRef?.slideNext()} className='btn rounded p-2'>
                                    <Icon icon='solar:round-alt-arrow-right-outline' width={25} height={25}></Icon>
                                </button>
                            </div>
                        </div>
                        <div>
                            <h1 className='highlighth1'>Popuar items</h1>
                            <View />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='d-flex flex-column'>
                            <div>
                                <h3 className='text-center deal'>DEAL OF THE DAY</h3>
                            </div>

                            <div>
                                <Swiper
                                    modules={[Navigation]}
                                    onSwiper={(swiper) => setSwiperRef1(swiper)}
                                    spaceBetween={0}
                                    slidesPerGroup={1}
                                    loop={false}>
                                    <SwiperSlide><DealDayCard/></SwiperSlide>
                                    <SwiperSlide><DealDayCard/></SwiperSlide>
                                </Swiper>

                                <div className='d-flex justify-content-center'>
                                    <button onClick={() => swiperRef1?.slidePrev()} className='btn rounded p-2 me-3'>
                                        <Icon icon='solar:round-alt-arrow-left-outline' width={25} height={25} />
                                    </button>
                                    <button onClick={() => swiperRef1?.slideNext()} className='btn rounded p-2'>
                                        <Icon icon='solar:round-alt-arrow-right-outline' width={25} height={25} />
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h3 className='deal mt-5 text-center'>Spotlighted Items</h3>
                            </div>
                            
                            <div>
                                <Swiper
                                    modules={[Navigation]}
                                    onSwiper={(swiper) => setSwiperRef2(swiper)}
                                    spaceBetween={0}
                                    slidesPerGroup={1}
                                    loop={false}>
                                    <SwiperSlide><DealDayCard/></SwiperSlide>
                                    <SwiperSlide><DealDayCard/></SwiperSlide>
                                </Swiper>

                                <div className='d-flex justify-content-center'>
                                    <button onClick={() => swiperRef2?.slidePrev()} className='btn rounded p-2 me-3'>
                                        <Icon icon='solar:round-alt-arrow-left-outline' width={25} height={25} />
                                    </button>
                                    <button onClick={() => swiperRef2?.slideNext()} className='btn rounded p-2'>
                                        <Icon icon='solar:round-alt-arrow-right-outline' width={25} height={25} />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
                <h3 className='deal mt-3'>Real People, Real Savings</h3>
                <Row className='mb-5'>
                    <Col md={3}>
                        <SavingCard />
                    </Col>
                    <Col md={3}>
                        <SavingCard />
                    </Col>
                    <Col md={3}>
                        <SavingCard />
                    </Col>
                    <Col md={3}>
                        <SavingCard />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home