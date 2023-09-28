
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell } from 'recharts';
import { getStoredItemFromLS } from '../../utility/localstorage';

const Statistics = () => {

    const donationData = useLoaderData();
    const [totalDonationData, setTotalDonationData] = useState(0);
    const [donatedData, setDonatedData] = useState(0);

    useEffect(() => {
        const storeData = getStoredItemFromLS();
        setDonatedData(storeData.length);
        setTotalDonationData(donationData.length - donatedData)
    },[donationData])

    const data = [{ name: 'Your Donation', value: donatedData }, { name: 'Total Donation', value: totalDonationData }];
    const COLORS = ["#00C49F", "#FF444A"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };

    return (
        <div className='flex flex-col justify-center items-center gap-8 my-24 font-bold'>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={180}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <div className='flex items-center gap-2'>
                <h3>Your Donation</h3>
                <div className='w-20 h-2 bg-[#00C49F]  rounded-md mr-4'></div>
                <h3>Total Donation</h3>
                <div className='w-20 h-2 bg-[#FF444A] rounded-md'></div>
            </div>
        </div>
    );
};

export default Statistics;