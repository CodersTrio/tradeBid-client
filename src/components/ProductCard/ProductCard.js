import React from 'react';
import {Button} from 'react-bootstrap'
import './ProductCard.css'
const url  = 'https://thumbs.dreamstime.com/b/dazzling-diamond-black-background-dazzling-diamond-black-background-design-174016948.jpg'


const ProductCard = () => {
    return (
        <div className="card">
            <img src={url} alt="" className='card-img'  />
            <h1 className="card-title"> Diamond Ring </h1>

            <div className="d-flex justify-content-around mt-2">
                <div className=''>
                    <h6> Current Bid </h6>
                    <h6> $152 </h6>
                </div>
                <div className=''>
                    <h6> Total Bids </h6>
                    <h6> 30 </h6>
                </div>
               
            </div>
            <Button className='submit-btn' variant="info">Submit a Bid</Button>
        </div>
    );
};

export default ProductCard;