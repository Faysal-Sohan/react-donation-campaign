import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Banner from "../Banner/Banner";

const Home = () => {

    const [donationData, setDonationData] = useState([]);
    const [displayDonationData, setDisplayDonationData] = useState([]);

    useEffect(() => {
        fetch('donation.json')
            .then(resp => resp.json())
            .then(data => {
                setDonationData(data);
                setDisplayDonationData(data);
            })
    }, [])

    const handleSearch = e => {
        e.preventDefault();
        const searchText = e.target.category.value;
        if(searchText !== '') {
            const filteredData = donationData.filter(data => data.category === searchText.trim());
            setDisplayDonationData(filteredData);
        }
        else {
            setDisplayDonationData(donationData);
        }
    }

    return (
        <div>
            <Banner key={donationData.id} handleSearch={handleSearch}></Banner>
            <div className="container mx-auto px-0 sm:px-4 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-24">
                {
                    displayDonationData.length === 0 ? <p className="text-5xl font-bold">No Data Found!</p> : displayDonationData.map(data => <Card key={data.id} data={data}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;