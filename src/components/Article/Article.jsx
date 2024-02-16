import React from 'react';
import article_img_1 from '../../images/article_img_1.jpg'
import article_img_2 from '../../images/article_img_2.jpg'
import {Link} from "react-router-dom";

const Article = () => {
    return (
        <section className='article'>
            <div className="container">
                <div className="article__items">
                    <div className="article__item">
                        <img src={article_img_1} alt='img'/>
                        <div className="article__block">
                            <h3>An easier way to buy your next Toyota
                            </h3>
                            <Link className='article__link' to='#'>more</Link>
                        </div>
                    </div>
                    <div className="article__item">
                        <img src={article_img_2} alt='img'/>
                        <div className="article__block">
                            <h3>A Guide to Road-Tripping With Pets
                            </h3>
                            <Link className='article__link' to='#'>more</Link>
                        </div>

                    </div>
                </div>
                <div className='article__btn-block'>
                    <Link to='#' className='article__btn'>SHOW MORE</Link>
                </div>

            </div>
        </section>
    );
};

export default Article;