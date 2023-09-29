import React from 'react';
async function getData() {
    const res = await fetch(process.env.MAIN_URL + "/BrandList");
    if (!res.ok) {
        throw new Error("BrandList Calling Fail")
    }
    return res.json();
}
const BrandList = async () => {
    const data = await getData();
    return (
        <div className='bg-gray-800 py-10'>
            <div className="flex my-14 mx-52 justify-between">
                {
                    data.map((item, i) => {
                        return (
                            <div key={i} className='' >

                                <img src={item.image} alt="" />
                            </div>

                        )
                    })
                }
            </div>
        </div>
    );
};

export default BrandList;