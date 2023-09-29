async function getData() {
    const res = await fetch(process.env.MAIN_URL + "/HeroList");
    if (!res.ok) {
        throw new Error('HeroList List Calling Fail')
    }
    return res.json();
}
const HeroPage = async () => {
    const data = await getData()
    const { image1, image2, image3, image4 } = data;
    return (
        <>
            <div className="hero min-h-screen bg-base-200 px-20">
                <div className="hero-content flex lg:flex-row-reverse">

                    <div className="flex w-6/12 my-20 flex-col-reverse max-w-sm rounded-lg shadow-2xl">
                        <div className="flex gap-4 mt-5">
                            <img className="rounded w-70" src={image1} alt="image1" />
                            <img className="rounded w-64" src={image2} alt="image2" />
                        </div>
                        <div className="flex gap-4 pr-20">
                            <img className="rounded w-80" src={image3} alt="image3" />
                            <img className="rounded w-80" src={image4} alt="image4" />
                        </div>
                    </div>
                    <div className="w-1/2 pr-14">
                        <h1 className="text-4xl font-bold">Increase Your Customaers Loualty and Satisfaction</h1>
                        <p className="py-6 my-20 ">We help businesses like yours earn more customers standout from competiars amke more money</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>

                </div>
            </div>


        </>
    );
};

export default HeroPage;