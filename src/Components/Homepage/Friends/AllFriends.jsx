import React, { use } from 'react';
import { Link } from 'react-router';

const friendsPromiss = fetch ("/friends.json").then(res => res.json())


const AllFriends = () => {

    const friends =use(friendsPromiss)
    

    return (
        <div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 m-auto w-[100%] lg:w-[1400px] p-3' >
                <div className=' shadow-sm rounded text-center p-5 bg-base-200'>
                    <p className='text-2xl font-bold text-[#244D3F]'>{friends.length}</p>
                    <h4 className='text-xl'>Total Friends</h4>
                </div>

                <div className=' shadow-sm rounded-2xl text-center p-5 bg-base-200'>
                    <p className='text-2xl font-bold text-[#244D3F]'>03</p>
                    <h4 className='text-xl'>On Track</h4>
                </div>

                <div className=' shadow-sm rounded-2xl text-center p-5 bg-base-200'>
                    <p className='text-2xl font-bold text-[#244D3F]'>06</p>
                    <h4 className='text-xl'>Need Attention</h4>
                </div>

                <div className=' shadow-sm rounded-2xl text-center p-5 bg-base-200'>
                    <p className='text-2xl font-bold text-[#244D3F]'>12</p>
                    <h4 className='text-xl'>Interactions This Month </h4>
                </div>
                
            </div>

            

            <div className=' w-[100%] lg:w-[1400px] my-20 m-auto space-y-10 '>

            <hr className='border border-base-300 my-5' />

            <h1 className='text-2xl font-semibold p-3' >Your  friends </h1>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-5 m-auto w-[100%] lg:w-[1400px] p-3 '>
                
                {
                friends.map(friend => (
                <Link to={`friendsDetails/${(friend.id)}`}  key={friend.id} className='shadow-lg p-5 rounded-2xl border border-base-300 text-center'>
                    <img className='m-auto w-[200px] h-[200px] rounded-full' src={friend.picture} alt="" />
                    <h1 className='text-2xl font-semibold'>{friend.name}</h1>
                    <p>{friend.days_since_contact}</p>
                    <div className='grid justify-center'>
                        <div className="badge badge-soft badge-success">{friend.tags}</div>

                    <span className={`mt-2  px-2 py-1 rounded text-white rounded-full ${
                            friend.status === "almost due"
                                ? "bg-yellow-400"
                                : friend.status === "on-track"
                                ? "bg-green-500"
                                : "bg-red-500"
                        }`}>
                            {friend.status}
                        </span>
                    </div>

                </Link>
            ))
            }
            </div>

            </div>
            

        </div>
    );
};

export default AllFriends;