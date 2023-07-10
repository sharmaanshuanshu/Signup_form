import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
export default function Home() {
    return (
        <div>
            <section className="container section1">
                <img className="homeImg" src="https://mall.cmsmasters.net/wp-content/uploads/2015/11/slider2.png" />
                <div>
                    <h1 className="section1-text">ONLINE&nbsp; &nbsp; SHOPPING</h1>
                </div>
                <div className="homeSlider1"></div>
                <div className="homeSlider2"></div>
                <div className="homeSlider3"></div>

            </section>
            <section className="container section2">
                <h1 className="mline">MOBILE PHONES</h1>
                <div>
                    <a href="https://amzn.to/43wYMjS" target="blank">
                        <img className="mobileImages" src="https://m.media-amazon.com/images/I/71XKAnxCsLL._AC_SY400_.jpg"
                            alt="Error Loading Image" />
                    </a>
                    <a href="https://amzn.to/45Af11t" target="_blank">
                        <img className="mobileImages" src="https://m.media-amazon.com/images/I/71+vkafKIJL._SX679_.jpg" />
                    </a>
                    <a href="https://amzn.to/43b5cW7" target="_blank">
                        <img className="mobileImages" src="https://m.media-amazon.com/images/I/71WS-0ITj7L._AC_SY200_.jpg" />
                    </a>
                    <a href="https://amzn.to/3BZYs1m" target="_blank">
                        <img className="mobileImages" src="	https://m.media-amazon.com/images/I/61JPVKnKC0L._SX679_.jpg" />
                    </a>
                    <a href="https://amzn.to/3BVIhlT" target="">
                        <img className="mobileImages" src="https://m.media-amazon.com/images/I/415peOXcsrL.jpg" />
                    </a>
                    <a href="https://amzn.to/43xWOjt" target="_blank">
                        <img className="mobileImages" src="https://m.media-amazon.com/images/I/31nheCKPIrL.jpg" />
                    </a>
                    <div className="clkmp">
                        <a className="c1" href="https://amzn.to/43wYMjS" target="blank">Click</a>
                        <a className="c2" href="https://amzn.to/45Af11t" target="blank">Click</a>
                        <a className="c3" href="https://amzn.to/43b5cW7" target="blank">Click</a>
                        <a className="c4" href="https://amzn.to/3BZYs1m" target="blank">Click</a>
                        <a className="c5" href="https://amzn.to/3BVIhlT" target="blank">Click</a>
                        <a className="c6" href="https://amzn.to/43xWOjt" target="blank">Click</a>

                    </div>
                </div>
            </section>

            <section className="container section3">
                <h1 className="wmfashion">WOMEN'S FASHION</h1>
                <div className="wmfsl1"></div>
                <div className="wmfsl2"></div>
                <div className="wmfsl3"></div>
                <div className="wmfsl4"></div>
                <div className="wmfsl5"></div>
            </section>

            <section className="container section4">
                <h1 className="beautyfshn">BEAUTY PRODUCTS</h1>
                <div className="butyf1"></div>
                <div className="butyf2"></div>
                <div className="butyf3"></div>
                <div className="butyf4"></div>
                <div className="butyf5"></div>
            </section>

            <section className="container section5">
                <h1 className="mensfshn">MEN'S FASHION</h1>
                <div className="mensf1"></div>
                <div className="mensf2"></div>
                <div className="mensf3"></div>
                <div className="mensf4"></div>
                <div className="mensf5"></div>
            </section>

            <section className="container section6">
                <h1 className="electronics">ELECTRONICS</h1>
                <div className="elect1"></div>
                <div className="elect2"></div>
                <div className="elect3"></div>
                <div className="elect4"></div>
                <div className="elect5"></div>
            </section>

            <section className="container section7">
                <h1 className="kids">KID'S PRODUCTS</h1>
                <div className="kids1"></div>
                <div className="kids2"></div>
                <div className="kids3"></div>
                <div className="kids4"></div>
                <div className="kids5"></div>
            </section>

            <section className="container section8">
                <h1 className="homeProducts">HOME PRODUCTS</h1>
                <div className="hp1"></div>
                <div className="hp2"></div>
                <div className="hp3"></div>
                <div className="hp4"></div>
                <div className="hp5"></div>
            </section>

            <footer className="my-2">
                Copyright &copy; myntra.com All right reserved
            </footer>

        </div>
    )
}
