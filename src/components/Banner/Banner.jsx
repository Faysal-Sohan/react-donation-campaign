import PropTypes from 'prop-types';

const Banner = ({handleSearch}) => {

    return (
        <div className="mb-28">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/sW8dL7B/banner.jpg)' }}>
                <div className="bg-white hero-overlay bg-opacity-95"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h3 className="text-5xl font-bold text-center text-black mb-10">I Grow By Helping People In Need</h3>
                        <form onSubmit={handleSearch} className="flex justify-center">
                            <input type="text" name="category" placeholder="Search here...." className="lg:w-[450px] md:w-56 border border-gray-300 text-gray-500 py-3 px-5 rounded-l-lg" />
                            <button className="py-3 px-5 bg-[#FF444A] text-white rounded-r-lg font-semibold" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    handleSearch: PropTypes.func.isRequired,
}

export default Banner;