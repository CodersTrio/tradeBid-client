import React from 'react';
import './ReviewForm.css';
import useAuth from '../../hook/useFirebase';
import HomeBanner from '../HomeBanner/HomeBanner';

const ReviewForm = () => {

    const { user } = useAuth();


    return (
        <>
        <HomeBanner></HomeBanner>

        <div className="container p-3 bg-light py-3">
            <h3 className="text-center">WE APPRECIATE YOUR REVIEW!</h3>

            <p className="text-center">Your review will help us to improve our web hosting quality products, and customer services.</p>

            <div className="d-flex justify-content-center">
                <form class="row g-3 input-design">


                    <div class="col-md-12 ">
                        <label for="inputEmail4" class="form-label">Name</label>
                        <input type="name" class="form-control" id="inputEmail4" placeholder={user?.displayName} />
                    </div>

                    <div class="col-md-12">
                        <label for="inputEmail4" class="form-label">Address</label>
                        <input type="address" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="col-md-12">
                        <label for="inputEmail4" class="form-label">Rating</label>
                        <input type="rating" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                        <label for="floatingTextarea2">Feedback</label>
                    </div>

                    <button type="submit" class="btn btn-info w-25 text-center ms-2">Submit</button>



                </form>
            </div>


        </div>

        </>


    );
};

export default ReviewForm;