import React from 'react';
async function getData() {
    const res = await fetch(process.env.MAIN_URL + "/FeaturedProject");
    if (!res.ok) {
        throw new Error('FeaturedProject List Calling Fail')
    }
    return res.json();
}
const FeaturedProject = async () => {
    const data = await getData();
    return (
        <div className='mt-32 my-10 mx-9'>

            <h1 className='text-sm uppercase text-green-600'>OUR FeaturedProject</h1>
            <p className='text-2xl font-bold my-12'>We provide the Perfect Solution To your business growth</p>

            <div className='flex'>
                <div className="card w-1/2 mr-3 card-compact bg-base-100 shadow-xl">
                    <figure><img className='p-10  rounded-2xl' src="https://thumbs.dreamstime.com/z/professional-development-programmer-working-programming-website-software-coding-technology-writing-codes-data-code-132331729.jpg?w=992" /></figure>
                    <div className="card-body">
                        <h2 className="card-title  ">Lorem ipsum dolor sit amet consectutar</h2>
                        <p>03-09-2023</p>
                    </div>
                </div>

                <div className='w-1/2 grid grid-cols-3 gap-8 '>
                    {
                        data.map((item, i) => {
                            return (
                                <div key={i} className="card w-52 card-compact bg-base-100 shadow-xl">
                                    <figure><img className='p-10  rounded-2xl' src={item.image} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title justify-center ">{item.title}</h2>
                                        <p>02-09-2023</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;