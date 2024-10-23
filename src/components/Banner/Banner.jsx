const Banner = () => {
    return (
        <div className="relative hero md:h-[600px] mt-6 rounded-xl overflow-hidden">

            <img className="absolute inset-0 w-full h-full object-fill" src="/src/assets/banner.jpg" alt="Banner" />

            
            <div className="absolute inset-0 bg-black bg-opacity-50  "></div>

            
            <div className="relative z-10 flex items-center justify-center h-full ">
                <div className="text-center text-white p-4">
                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mb-5 max-w-xl mx-auto">
                        Learn and Master Basic Programming, Data Structures, Algorithms, OOP, Database, and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="#our-recipes" className="btn text-black border-none bg-[#0BE58A] px-6 py-3 rounded-full">Explore Now</a>
                        <button className="btn bg-transparent border-2 border-white px-6 py-3 rounded-full text-white hover:text-black">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;