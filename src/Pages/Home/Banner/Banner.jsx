import React from 'react';
import b1 from '../../../assets/img/1.jpg'
import b2 from '../../../assets/img/2.jpg'
import b3 from '../../../assets/img/3.jpg'


const Banner = () => {


    return (
        <div className="carousel h-[600px] w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={b1}
                    className="w-full rounded-xl" />
                <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)]  bottom-0 text-white h-full justify-start">
                    <div className=" space-y-7 w-1/2 pl-5">
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Veniam non officiis aspernatur iste eligendi hic eum aut incidunt modi,
                            distinctio ad accusantium a quam ipsum? Ex et temporibus eum nisi?</p>
                        <div className="flex">
                            <button className="btn btn-error mr-4 ">Discover More</button>

                            <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0  flex -translate-y-1/2 transform justify-end">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={b2}
                    className="w-full" />
                     <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)]  bottom-0 text-white h-full justify-start">
                    <div className=" space-y-7 w-1/2 pl-5">
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Veniam non officiis aspernatur iste eligendi hic eum aut incidunt modi,
                            distinctio ad accusantium a quam ipsum? Ex et temporibus eum nisi?</p>
                        <div className="flex">
                            <button className="btn btn-error mr-4 ">Discover More</button>

                            <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0  flex -translate-y-1/2 transform justify-end">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={b3}
                    className="w-full" />
                     <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)]  bottom-0 text-white h-full justify-start">
                    <div className=" space-y-7 w-1/2 pl-5">
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Veniam non officiis aspernatur iste eligendi hic eum aut incidunt modi,
                            distinctio ad accusantium a quam ipsum? Ex et temporibus eum nisi?</p>
                        <div className="flex">
                            <button className="btn btn-error mr-4 ">Discover More</button>

                            <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0  flex -translate-y-1/2 transform justify-end">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={b2}
                    className="w-full" />
                     <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0)]  bottom-0 text-white h-full justify-start">
                    <div className=" space-y-7 w-1/2 pl-5">
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Veniam non officiis aspernatur iste eligendi hic eum aut incidunt modi,
                            distinctio ad accusantium a quam ipsum? Ex et temporibus eum nisi?</p>
                        <div className="flex">
                            <button className="btn btn-error mr-4 ">Discover More</button>

                            <button className="btn btn-outline btn-accent">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0  flex -translate-y-1/2 transform justify-end">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;