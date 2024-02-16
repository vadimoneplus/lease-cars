import React, {useState} from 'react';
import Article from "../Article/Article";
import cardImg1 from "../../images/card-1.jpg"
import cardImg2 from "../../images/card-2.jpg"
import cardImg3 from "../../images/card-3.jpg"
import cardImg4 from "../../images/card-4.jpg"
import cardImg5 from "../../images/card-5.jpg"
import cardImg6 from "../../images/card-6.jpg"
import cardImg7 from "../../images/card-7.jpg"
import cardImg8 from "../../images/card-8.jpg"
import cardImg9 from "../../images/card-9.jpg"
import cardImg10 from "../../images/card-10.jpg"
import cardImg11 from "../../images/card-11.jpg"
import cardImg12 from "../../images/card-12.jpg"
import {Link} from "react-router-dom";

const card = [
    {type:'Electrified', cardImg: cardImg1, cardLink: '#', title: 'Toyota Crown 2023', price: '39900', priceMo: '650'},
    {type:'Electrified', cardImg: cardImg2, cardLink: '#', title: 'Prius Prime 2023', price: '39900', priceMo: '450'},
    {type:'Electrified', cardImg: cardImg3, cardLink: '#', title: 'Toyota Prius 2023', price: '39900', priceMo: '400'},
    {type:'Electrified', cardImg: cardImg4, cardLink: '#', title: 'Hyundai Kona 2023', price: '39900', priceMo: '510'},
    {type:'Crossovers & SUVs', cardImg: cardImg5, cardLink: '#', title: 'Ford Explorer 2023', price: '39900', priceMo: '1,013'},
    {type:'Crossovers & SUVs', cardImg: cardImg6, cardLink: '#', title: 'Santa  Fe 2023', price: '39900', priceMo: '739'},
    {type:'Electrified', cardImg: cardImg7, cardLink: '#', title: 'KIA Niro 2023', price: '39900', priceMo: '554'},
    {type:'Trucks', cardImg: cardImg8, cardLink: '#', title: 'Chevrolet Silverado', price: '39900', priceMo: '1,032'},
    {type:'Crossovers & SUVs', cardImg: cardImg9, cardLink: '#', title: 'Honda CR-V 2023', price: '39900', priceMo: '591'},
    {type:'Crossovers & SUVs', cardImg: cardImg10, cardLink: '#', title: 'Hyundai Tucson', price: '39900', priceMo: '528'},
    {type:'Crossovers & SUVs', cardImg: cardImg11, cardLink: '#', title: 'Chevrolet Equinox', price: '39900', priceMo: '471'},
    {type:'Crossovers & SUVs', cardImg: cardImg12, cardLink: '#', title: 'Jeep Wrangler 2023', price: '39900', priceMo: '997'},
]

const tabs = [
    {type:'Car and Minivan'},
    {type:'Trucks'},
    {type:'Crossovers & SUVs'},
    {type:'Electrified'},
]
const Catalog = () => {
    const [activeTab,setActiveTab]=useState('Car and Minivan')
    const tabHandler = (btn) => {
        setActiveTab(btn)
    }
    return (
        <section className='catalog'>
            <div className="container">
                <h2 className="catalog__title">Choose your car</h2>
                <div className="tabs">
                    <div className="tabs__btn">
                        {tabs.map(tab=>(
                            <div onClick={()=>tabHandler(tab.type)} className={`tabs__btn-item ${activeTab===tab.type ? 'tabsBtnItemActive':''}`}>{tab.type}</div>
                        ))}
                    </div>
                    <div className="tabs__content">
                        <div className="tabs__content-item">
                            {card.map(element=>(activeTab === element.type
                                    ?
                                <Card key={element.cardImg}
                                    cardImg={element.cardImg}
                                    title={element.title}
                                    price={element.price}
                                    priceMo={element.priceMo}
                                    cardLink={element.cardLink}
                                />
                                    : activeTab === 'Car and Minivan' &&
                                    <Card key={element.cardImg}
                                          cardImg={element.cardImg}
                                          title={element.title}
                                          price={element.price}
                                          priceMo={element.priceMo}
                                          cardLink={element.cardLink}
                                    />

                            ))}

                        </div>
                    </div>
                    <Link to={''} className='tabs__link'>SHOW MORE</Link>
                </div>
                <Article/>
            </div>
        </section>
    );
};

export default Catalog;


const Card = ({cardImg, title, price, priceMo, cardLink}) => {
    return (
        <div className="card">
            <img src={cardImg} alt="#" className="card-img"/>
            <div className="card-context">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">starting from $ {price}</p>
                <p className="card-price">$ {priceMo}/mo</p>
            </div>


            <a href={cardLink} className="card-link">see details</a>
        </div>
    )
}