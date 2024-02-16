import React from 'react';
import {Slider} from "../Swiper/Slider";
import {Link} from "react-router-dom";
import why_1 from '../../images/why_1.png'
import why_2 from '../../images/why_2.png'
import why_3 from '../../images/why_3.png'
import why_4 from '../../images/why_4.png'
import img_1 from '../../images/img_1.jpg'
import img_2 from '../../images/img_2.jpg'
import img_3 from '../../images/img_3.jpg'
import img_4 from '../../images/img_4.jpg'

const WHY_LEASE_LINK = [
    {
        img: why_1,
        title: 'Top Dealers',
        text: 'TrueCar Certified Dealers compete for your business by providing discounted pricing on in-stock inventory.'
    },
    {
        img: why_2,
        title: 'Discounted Pricing',
        text: 'View local inventory from the comfort of home and get access to guaranteed savings on the car of your choice.'
    },
    {
        img: why_3,
        title: 'Lower Payments',
        text: 'Get discounted pricing when you shop for a car or truck using TrueCar and save on your lease payment.'
    },
    {
        img: why_4,
        title: 'Easy Upgrade',
        text: 'Easy to upgrade to the newest vehicle model every few years if you would like to be modern and comfortable'
    },
]
const Main = () => {
    return (
        <>
            <section className='top'>
                <div className="container">
                    <h1 className="title">Leasing From D&M</h1>
                    <Link to={'/catalog'} className="top___link">FIND A CAR</Link>
                </div>
            </section>
            <Slider/>
            <section className='why-lease'>
                <div className="container">
                    <h2 className="why-lease__title">Why Lease with D&M?</h2>
                    <ul className="why-lease__list">
                        {WHY_LEASE_LINK.map(({img, title, text}) => (
                            <li key={img} className='why-lease__item'>
                                <img className='why-lease__item-img' src={img}/>
                                <h3 className="why-lease__item-title">{title}</h3>
                                <p className='why-lease__item-text'>{text}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="why-lease__context">
                        <h2 className="why-lease__context-title">How Does Leasing Work?</h2>
                        <div className="why-lease__context-text_top">Leasing a vehicle is essentially entering into a
                            long term rental
                            agreement for that vehicle. Unlike a traditional car purchase, you don’t actually own the
                            vehicle. Instead, a leasing company purchases the vehicle from the dealer on your behalf and
                            then you make monthly payments to the leasing company for the duration of your lease. Some
                            leases however, do provide the option to purchase the vehicle at the end of the lease.
                        </div>
                        <h3>Similar to a short term car rental, there are rules that define:</h3>
                        <ul className='why-lease__context-list'>
                            <li className='why-lease__context-item'>
                                <div className='why-lease__context-num'>1</div>
                                <div className='why-lease__context-text'>How much you can drive, stated as annual miles
                                    (excess miles are charged at a specified
                                    rate)
                                </div>
                            </li>
                            <li className='why-lease__context-item'>
                                <div className='why-lease__context-num'>2</div>
                                <div className='why-lease__context-text'>Types of damage that you may be liable for at
                                    the end of your lease
                                </div>
                            </li>
                            <li className='why-lease__context-item'>
                                <div className='why-lease__context-num'>3</div>
                                <div className='why-lease__context-text'>The procedures and costs when you return the
                                    vehicle at the end of your lease
                                </div>
                            </li>
                        </ul>
                        <p className='why-lease__context-footer'>Lease contracts are a commitment and ending them early can be difficult and expensive so it is important to consider your circumstances carefully before you decide.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="video">
                        <h2 className="video__title">WELCOME TO D&M LEASING</h2>
                        <h3 className="video__subtitle">Find out how easy it is to lease from D&M</h3>
                        <iframe width="1000" height="500"
                                src="https://www.youtube.com/embed/oiUXKURavWs?si=NCm017u4b7Cz_IjK&amp;controls=0"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                </div>
            </section>
            <section className="important">
                <div className="container">
                    <h2 className="important__title">Important Things to Consider</h2>
                <p className="important__text">
                    Depending on your circumstances and what is important to you, a lease could be a great option for your next vehicle. Below are some important factors that may influence your decision.
                </p>
                    <ul className="important__list">
                        <li className="important__item">
                            <img src={img_1} alt="img_1"/>
                            <p>Monthly payments on leases are generally 20% - 30% cheaper than loans</p>
                        </li>
                        <li className="important__item">
                            <img src={img_2} alt="img_2"/>
                            <p>Monthly payments on leases are generally 20% - 30% cheaper than loans</p>
                        </li>
                        <li className="important__item">
                            <img src={img_3} alt="img_3"/>
                            <p>Monthly payments on leases are generally 20% - 30% cheaper than loans</p>
                        </li>
                        <li className="important__item">
                            <img src={img_4} alt="img_4"/>
                            <p>Monthly payments on leases are generally 20% - 30% cheaper than loans</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>

    );
};

export default Main;