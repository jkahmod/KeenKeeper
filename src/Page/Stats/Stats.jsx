import React, { useContext } from 'react';
import { ActivityContext } from "../../Context/ActivityContext";
import { Pie, PieChart, Tooltip, Legend } from 'recharts';

const Stats = () => {

    const { activities } = useContext(ActivityContext);

    // 🔥 convert activities → chart format
    const chartData = Object.values(
        activities.reduce((acc, item) => {

            if (!acc[item.type]) {
                acc[item.type] = {
                    name: item.type,
                    value: 0,
                    fill:
                        item.type === "call"
                            ? "#234F40"
                            : item.type === "text"
                            ? "#8139F6"
                            : "#37a162"
                };
            }

            acc[item.type].value += 1;
            return acc;

        }, {})
    );

    return (
        <div className='w-[100%] lg:w-[1400px] mx-auto lg:my-20 space-y-10 overflow-hidden p-3 '>
            
            <div>
                <h1 className='text-2xl lg:text-4xl  font-bold '>
                    Friendship Analytics
                </h1>
            </div>

            <div className='bg-base-200 p-5 rounded-2xl shadow-sm'>
                
                <p className='font-medium text-2xl'>
                    By Interaction Type
                </p>

                <span className='flex justify-center'>
                    <PieChart
                        style={{
                            width: '100%',
                            maxWidth: '500px',
                            maxHeight: '80vh',
                            aspectRatio: 1
                        }}
                    >
                        <Pie
                            data={chartData}
                            innerRadius="80%"
                            outerRadius="100%"
                            cornerRadius="50%"
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        />
                        <Legend />
                        <Tooltip />
                    </PieChart>
                </span>

            </div>
        </div>
    );
};

export default Stats;