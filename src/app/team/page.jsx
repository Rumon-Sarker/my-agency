import Subscribe from '@/components/Subscribe';
import Link from 'next/link';
import React from 'react';

async function getData() {
    const res = await fetch(process.env.MAIN_URL + "/TeamList");
    if (!res.ok) {
        throw new Error("TeamList Calling Fail")
    }
    return res.json();
}
const TeamPag = async () => {
    const data = await getData();
    return (
        <>
            <div className='mx-20 my-20'>
                <h1 className='text-3xl font-extrabold my-4'>Team </h1>
                <p><Link href={"/"}>Home</Link> {">"} <span className='text-green-600'>Team</span></p>
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
                                        <figure><img className='p-4' src={item.image} /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title justify-center ">{item.name}</h2>
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

export default TeamPag;