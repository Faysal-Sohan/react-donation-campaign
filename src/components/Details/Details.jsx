import { useLoaderData, useParams } from "react-router-dom";
import { saveItemToLS } from "../../utility/localstorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const { donationId } = useParams();
    const donationData = useLoaderData();

    const {id, title, image, description, text_color, price } = donationData.find(data => data.id == donationId);

    const btnColor = {
        'background-color': text_color
    }

    const handleDonation = () => {
        saveItemToLS(id);
        toast("Your donation is successfull!")
    }

    return (
        <div className="container mx-auto mt-12 mb-24 p-0 sm:p-4">
            <div className="relative mb-14">
                <figure><img src={image} alt="" className="w-full rounded-lg"/></figure>
                <div className="absolute bottom-0 p-10 bg-black bg-opacity-60 w-full rounded-lg">
                    <button className="px-6 py-4 sm:py-2 text-white font-medium rounded-lg text-xl" 
                    style={btnColor} onClick={handleDonation}
                    >Donate ${price}</button>
                </div>
            </div>
            <h3 className="text-4xl font-bold mb-6">{title}</h3>
            <p className="text-gray-500 text-justify">{description}</p>
            <ToastContainer />
        </div>
    );
};

export default Details;