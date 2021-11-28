import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import headerBanner from './homeBg.jpg';
import './HomeBanner.css';

const HomeBanner = () => {
    
    return (
        <div>
            <div>
                <img src={headerBanner} className="homeBanner" alt="" />

                <div className="header-bodyDesign">
                    {/* <Fade bottom duration={2500}> */}

                        <h1 id="home-header1">Find Anything With Ease</h1>

                        <p id="home-header2" className="home-text my-3">Buyent truly dedicated to making your classified experience as simple and fun as possible. We will be making it more and more flexible.</p>

                        {/* <Link to="/products" className="homeBtnDesign">
                            <Button className='homeBtn' style={{ width: '250px' }}>Explore more</Button>
                        </Link> */}

                    {/* </Fade> */}


                </div>

            </div>
        </div>
    );
};

export default HomeBanner;