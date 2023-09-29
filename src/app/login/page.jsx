import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content ">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className='text-2xl font-bold text-gray-400 text-center'>LOGIN NOW:</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value='Login' />
                        </div>
                    </form>
                    <p className="mb-9">You have no account.....<Link className='text-green-500 text-xl bg-gray-800 rounded p-1' href="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;