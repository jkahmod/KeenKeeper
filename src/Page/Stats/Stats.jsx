import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';



const data = [
  { name: 'Text', value: 400, fill: '#8139F6' },
  { name: 'Call', value: 300, fill: '#234F40' },
  { name: 'Video', value: 300, fill: '#37a162' },

];

const Stats = () => {

    
    return (
        <div className='w-[100%] lg:w-[1400px] mx-auto my-20 space-y-10'>
            <div>
                <h1 className='text-4xl font-bold ' >Friendship Analytics</h1>
            </div>
            <div className='bg-base-200 p-5 rounded-2xl shadow-sm' >
                <p className='font-medium text-2xl'>By Interaction Type</p>
                 
                 <span className='flex justify-center'>
                <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    fill="#8884d8"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                />
                <Legend></Legend>
                <Tooltip></Tooltip>
                </PieChart> 
                 </span>

            </div>
            

        </div>
    );
};

export default Stats;