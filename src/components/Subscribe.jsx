import React from 'react';

const Subscribe = () => {
    return (

        <div>
            <div className="form-control my-10 text-center">
                <p className='text-green-600'>SUBSCRIBE</p>
                <p className='text-2xl font-bold my-3'>Subscribe To GEt Teh Latest <br /> News About Us</p>
                <span className="text-sm">Please Drop Your Email Below To get Dailuy Updat Avout What We Do</span>
                <div className="input-group justify-center my-2 w-full ">
                    <input type="text" placeholder="Enter Your Email" className="input input-bordered" />
                    <button className="btn btn-square h-6 w-20 bg-green-700">Submit

                    </button>
                </div>

            </div>
        </div>
    );
};

export default Subscribe;