import React from 'react';
import { FaArchive, FaVideo } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';
import { MdDeleteOutline, MdOutlineSnooze, MdOutlineTextsms } from 'react-icons/md';
import { RiNotificationSnoozeLine } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';

const FriendsDetails = () => {

    const {friendId} = useParams();
    console.log(friendId,"friendId")

    const friends = useLoaderData();
    console.log(friends);

    const expectedFriend = friends.find(friend=> friend.id === Number(friendId));
    console.log(expectedFriend,"expectedFriend")

    const {
        picture,
        name,
        tags,
        status,
        bio,
        days_since_contact,
        next_due_date,
        goal


        } = expectedFriend;



    return (
        <div>
            <div className='w-[100%] lg:w-[1400px] my-20 mx-auto flex justify-between gap-10' >
                <div className=' w-[100%] lg:w-[500px] text-center space-y-10'>
                      <div className='shadow-lg rounded p-3 text-center space-y-5'>
                        <img className='m-auto w-50 h-50 rounded-full ' src={picture} alt="" />
                        <h3 className='text-2xl font-bold '>{name}</h3>

                        <div className='grid justify-center gap-3'>
                            <span className={`mt-2  px-2 py-1 rounded text-white rounded-full ${
                            status === "almost due"
                                ? "bg-yellow-400"
                                : status === "on-track"
                                ? "bg-green-500"
                                : "bg-red-500"
                        }`}>
                            {status}
                        </span>

                            <div className="badge badge-soft badge-success">{tags}</div>
                            </div>
                        <p className=' text-sm italic'>"{bio}"</p>
                      </div>  
                     <div className='grid  gap-3'>
                        <button className='btn'><RiNotificationSnoozeLine />

                        Snooze 2 weeks</button>
                        <button className='btn'> <FaArchive />
                        Archive </button>
                        <button className='btn text-red-500'> <MdDeleteOutline />
                        Delete</button>
                     </div>
                </div>
                <div className='w-[100%] lg:w-[900px] space-y-5'>

                    {/* 1st */}
                    <div className='grid grid-cols-3 gap-5'>

                        <div className='shadow-sm rounded p-5' >
                            <p className='text-2xl text-green-900 font-bold text-center'>{days_since_contact}</p>
                            <p className='text-center text-xl capitalize'>days since contact</p>
                        </div>

                        <div className='shadow-sm rounded p-5' >
                            <p className='text-2xl text-green-900 font-bold text-center'>{goal}</p>
                            <p className='text-center text-xl capitalize'>goal (days)</p>
                        </div>

                        <div className='shadow-sm rounded p-5' >
                            <p className='text-2xl text-green-900 font-bold text-center'>{next_due_date}</p>
                            <p className='text-center text-xl capitalize'>next Due </p>
                        </div>

                        
                        
                    </div>
                    
                    {/* 2nd  */}
                    <div className='shadow-md p-5 flex justify-between'>
                         <div>
                            <h4 className='font-semibold text-xl'>Relationship Goal</h4>
                            <p>Connect every <span className='font-semibold text-xl'>{goal}days</span></p>

                        </div>  
                        <div>
                            <button className='btn'>Edit</button>
                        </div> 
                    </div>
                    
                    {/* 3rd */}
                    <div className='shadow-sm p-5 space-y-3'>
                        <h4 className='font-semibold text-xl'>Quick Check-In</h4>
                        <div className='grid grid-cols-3 gap-5'>
                            <div className='bg-base-200 rounded p-5 shadow-sm grid justify-center '>
                                <IoCallOutline />
                                <p> Call </p>
                            </div>
                            <div className='bg-base-200 rounded p-5 shadow-sm grid justify-center '>
                                <MdOutlineTextsms />

                                <p> Text  </p>
                            </div>
                            <div className='bg-base-200 rounded p-5 shadow-sm grid justify-center '>
                                <FaVideo />

                                <p> Video  </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendsDetails;