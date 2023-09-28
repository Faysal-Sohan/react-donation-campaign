import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredItemFromLS } from "../../utility/localstorage";


const Donation = () => {

    const donationData = useLoaderData();
    const [donatedData, setDonatedData] = useState([]);
    const [displayNumber, setDisplayNumber] = useState(4);


    useEffect(() => {
        const storedDonatedIds = getStoredItemFromLS();

        const storedDonatedData = donationData.filter(data => storedDonatedIds.includes(data.id));
        setDonatedData(storedDonatedData);
    }, [donationData])

    return (
        <div className="container mx-auto mb-24">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
                {
                    donatedData.slice(0, displayNumber).map(data => <div key={data.id}>
                        <div className="card card-side shadow-xl" style={{ backgroundColor: data.category_color }}>
                            <figure><img src={data.image} alt="" className="w-56 h-52" /></figure>
                            <div className="p-4 space-y-3">
                                <button className='px-3 py-1 rounded-lg font-medium' style={{ backgroundColor: data.btn_color, color: data.text_color }}>{data.category}</button>
                                <h2 className="text-2xl font-semibold">{data.title}</h2>
                                <p className="font-semibold" style={{ color: data.text_color }}>${data.price}</p>
                                <div className="card-actions justify-start">
                                    <button className="px-4 py-2 text-white font-semibold text-[18px] rounded-lg" style={{ backgroundColor: data.text_color }}>View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className={`text-center mt-20 ${donatedData.length > displayNumber || 'hidden'}`}>
                <button className="px-4 py-2 text-white font-semibold bg-[#009444] rounded-lg"
                onClick={() => setDisplayNumber(donatedData.length)}
                >See All</button>
            </div>
        </div>
    );
};

export default Donation;