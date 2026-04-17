import React, { useContext } from 'react';
import { FaArchive, FaVideo } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';
import { MdDelete, MdOutlineTextsms } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router';
import { ActivityContext } from "../../Context/ActivityContext";
import { RiNotificationSnoozeLine } from 'react-icons/ri';

const FriendsDetails = () => {

    const { friendId } = useParams();
    const friends = useLoaderData();

    const expectedFriend = friends.find(
        friend => friend.id === Number(friendId)
        
    );

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

    const { handleAddActivity } = useContext(ActivityContext);

    return (
        <div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-3 mx-auto w-[100%] lg:w-[1400px] my-5 lg:my-10 p-3'>

               
                <div className='w-[100%] lg:w-[600px] text-center space-y-10'>

                    <div className='shadow-lg rounded p-3 space-y-5'>
                        <img
                            className='m-auto w-40 h-40 rounded-full'
                            src={picture}
                            alt=""
                        />

                        <h3 className='text-2xl font-bold'>{name}</h3>

                        <div className='grid justify-center gap-3'>
                            <span
                                className={`px-3 py-1 text-white rounded-full ${
                                    status === "almost due"
                                        ? "bg-yellow-400"
                                        : status === "on-track"
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                }`}
                            >
                                {status}
                            </span>

                            <div className="badge badge-soft badge-success">
                                {tags}
                            </div>
                        </div>

                        <p className='text-sm italic'>"{bio}"</p>
                    </div>

                    
                    <div className='grid gap-3'>

                        <button                         
                            className='btn'
                        >
                             <RiNotificationSnoozeLine /> Snooze 2 weeks
                        </button>
                        <button                         
                            className='btn'
                        >
                             <FaArchive /> Snooze 2 weeks
                        </button>
                        <button                         
                            className='btn'
                        >
                             <MdDelete  /> Delete
                        </button>

                    </div>
                </div>

                
                <div className='w-[100%] lg:w-[900px] space-y-10'>

                    <div className='grid lg:grid-cols-3 gap-5'>

                        <div className='shadow-sm p-5 text-center'>
                            <p className='text-2xl font-bold text-green-900'>
                                {days_since_contact}
                            </p>
                            <p className='text-xl'>Days Since Contact</p>
                        </div>

                        <div className='shadow-sm p-5 text-center'>
                            <p className='text-2xl font-bold text-green-900'>
                                {goal}
                            </p>
                            <p className='text-xl'>Goal (Days)</p>
                        </div>

                        <div className='shadow-sm p-5 text-center'>
                            <p className='text-2xl font-bold text-green-900'>
                                {next_due_date}
                            </p>
                            <p className='text-xl'>Next Due</p>
                        </div>

                    </div>

                    <div className='shadow-sm p-5 flex justify-between'>
                        <div>
                            <h4 className='text-xl font-semibold'>
                                Relationship Goal
                            </h4>
                            <p>
                                Connect every{" "}
                                <span className='font-bold'>
                                    {goal} days
                                </span>
                            </p>
                        </div>

                        <button className='btn'>Edit</button>
                    </div>

                    
                    <div className='shadow-sm p-5 space-y-3'>
                        <h4 className='text-xl font-semibold'>
                            Quick Check-In
                        </h4>

                        <div className='grid lg:grid-cols-3 gap-5'>

                            <button
                                onClick={() => handleAddActivity(expectedFriend, "call")}
                                className='grid justify-center gap-2 shadow-sm py-4 text-xl cursor-pointer hover:bg-gray-100'
                            >
                                <IoCallOutline />
                                Call
                            </button>

                            <button
                                onClick={() => handleAddActivity(expectedFriend, "text")}
                                className='grid justify-center gap-2 shadow-sm py-4 text-xl cursor-pointer hover:bg-gray-100 '
                            >
                                <MdOutlineTextsms />
                                Text
                            </button>

                            <button
                                onClick={() => handleAddActivity(expectedFriend, "video")}
                                className='grid justify-center gap-2 shadow-sm py-4 text-xl cursor-pointer hover:bg-gray-100'
                            >
                                <FaVideo />
                                Video
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendsDetails;