import React from 'react';
import store from '../../images/app-store.png'
import google from '../../images/google-play.png'

const MENUFOOTER = {
    'Products': [
        {link: 'Used', href: '#',}, {link: 'New', href: '#',}, {link: 'Sell your car', href: '#',}
    ],
    'Resources': [
        {link: 'Blog', href: '#',}, {link: 'FAQ', href: '#',}, {link: 'SContact us', href: '#',}
    ],
    'Work With TrueCar': [
        {link: 'Dealers', href: '#',}, {link: 'Partners', href: '#',}
    ],
    'About': [
        {link: 'About us', href: '#',}, {link: 'Team', href: '#',}, {link: 'Careers', href: '#',}
    ],
}

const APP = [
    {
        href: 'https://www.apple.com/app-store/',
        img: store
    },
    {
        href: 'https://play.google.com/store/apps',
        img: google
    },
]

const FOOTERTEXT=[
    "For questions about the TrueCar Auto Buying Service please call 1-888-878-3227.",
    "Certified Dealers are contractually obligated by TrueCar to meet certain customer service\n" +
    "requirements and complete the TrueCar Dealer Certification Program.",
    "TrueCar does not broker, sell, or lease motor vehicles. Unless otherwise noted, all vehicles shown on\n" +
    "this website are offered for sale by licensed motor vehicle dealers. All vehicles are subject to\n" +
    "prior sale. By accessing this website, you agree to the TrueCar Terms of Service and Privacy\n" +
    "Policy."
]
const FOOTERCOPY = [
    {link:'Terms of Service', href:'#'},
    {link:'Privacy Policy', href:'#'},
    {link:'Do Not Sell My Personal Information', href:'#'}
]

const Footer = () => {
    const arr = Object.entries(MENUFOOTER)
    return (
        <footer className='footer'>
            <div className="container">
                <nav className="footer__menu">
                    {arr.map(e => (
                        <ul className="footer__menu-list" key={e[0]}>
                            <h2 className='footer__menu-title'>{e[0]}</h2>
                            {e[1].map(({link, href}) => (
                                <li className='footer__menu-item' key={link}>
                                    <a href={href} className='footer__menu-link'>{link}</a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </nav>
                <ul className="app-link">
                    {APP.map(({href, img}) => (
                        <li className='app__item' key={href}>
                            <a href={href} target='_blank'>
                                <img src={img} alt={href}/>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="footer__copy">
                    {FOOTERTEXT.map(text => (
                        <p className='footer__text' key={text}>
                            {text}
                        </p>
                    ))}

                </div>

                <nav className='copy__nav'>
                    <ul className="copy__nav-list">
                        {FOOTERCOPY.map(({link,href}) =>(
                            <li className="copy--nav-item" key={link}>
                                <a href={href} className="copy__nav-link">{link}</a>
                            </li>
                        ))}

                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
// {MENUFOOTER.map(({title, link, href}, i) => (
//     <li className='footer__menu-item' key={i}>
//         {title ? <p className='footer__menu-title'>{title}</p> :
//             <a href={href} className='footer__menu-link'>{link}</a>}
//     </li>
// ))}