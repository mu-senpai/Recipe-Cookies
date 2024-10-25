const Banner = () => {
    return (
        <div className="w-full mb-10 sm:mb-14 md:mb-20 lg:mb-28">
            <div className="hero bg-[url('https://i.ibb.co.com/rwBFZrn/image.png')] bg-cover h-[37.5rem] rounded-[1.5rem]">
                <div className="hero-content text-white text-center">
                    <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[70%] space-y-4">
                        <h1 className="text-2xl/normal sm:text-3xl/normal md:text-4xl/normal lg:text-5xl/normal font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="text-xs/relaxed sm:text-sm/relaxed md:text-base/relaxed lg:text-lg/relaxed py-6">
                            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                        </p>
                        <div className="flex justify-center gap-4">
                            <button className="btn bg-[#0BE58A] border-none text-black rounded-[3rem]">Explore Now</button>
                            <button className="btn btn-ghost border-2 border-white text-white rounded-[3rem]">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;