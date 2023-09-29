import Subscribe from '@/components/Subscribe';
import Link from 'next/link';
import React from 'react';

async function getData() {
    const res = await fetch(process.env.MAIN_URL + "/TestimonialList");
    if (!res.ok) {
        throw new Error("TestimonialList Calling Fail")
    }
    return res.json();
}
const TestimonialListPage = async () => {
    const data = await getData();
    return (
        <>
            <div className='mx-20 my-20'>
                <h1 className='text-3xl font-extrabold my-4'>Team </h1>
                <p><Link href={"/"}>Home</Link> {">"} <span className='text-green-600'>TestimonialList</span></p>
                <div>

                    <div className='mt-32'>
                        <h1 className='text-sm text-green-600'>OUR TEAM MEMBER</h1>
                        <p className='text-2xl font-bold my-5'>Check our awesome team members</p>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            data.map((item, i) => {
                                return (
                                    <div key={i} className="card card-compact bg-base-100 shadow-xl">
                                        <figure><img className="w-40 rounded-badge p-4" src={item.image} /></figure>
                                        <div className="card-body">
                                            <p>{item.msg}</p>
                                            <h2 className="card-title justify-center ">{item.name}</h2>
                                            <h2 className="card-title justify-center text-sm">{item.designation}</h2>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <Subscribe></Subscribe>
        </>
    );
};

export default TestimonialListPage;