import Link from 'next/link';
import React from 'react';
async function getData() {
    const res = await fetch(process.env.MAIN_URL + "/WorkList");
    if (!res.ok) {
        throw new Error("WorkList Calling Fail")
    }
    return res.json();
}
const WorkList = async () => {
    const data = await getData();
    return (
        <div className='my-20 mx-32'>
            <h1 className='text-sm uppercase text-green-600'>Worklist</h1>
            <p className='text-2xl font-bold my-12'>We provide the Perfect Solution <br /> To your business growth</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6  items-center justify-center ">
                {
                    data.map((item, i) => {
                        return (
                            <div key={i} className="card w-80 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title font-extrabold text-2xl">{item.title}</h2>
                                    <p className='text-sm'>{item.des}</p>
                                    <div className="card-actions mt-10">
                                        <Link href={'/'}>Learn More -----{'>'}</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default WorkList;