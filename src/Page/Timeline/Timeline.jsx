import { useContext, useState } from "react";
import { ActivityContext } from "../../Context/ActivityContext";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import { FaVideo } from "react-icons/fa";

const Timeline = () => {

    const { activities } = useContext(ActivityContext);
    const [filter, setFilter] = useState("all");

    
    const filteredActivities =
        filter === "all"
            ? activities
            : activities.filter(item => item.type === filter);

    return (
        <div className="w-[100%] lg:w-[1400px] p-5 mx-auto my-10">

            <h2 className="text-3xl font-bold mb-5">Timeline</h2>

            
            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="select select-bordered mb-5 w-[250px]"
            >
                <option value="all">All Activities</option>
                <option value="call">Call</option>
                <option value="text">Text</option>
                <option value="video">Video</option>
            </select>

            
            {
                filteredActivities.length === 0 && (
                    <p className="text-gray-500">No activity found</p>
                )
            }

            
            <div className="space-y-3">

                {
                    filteredActivities.map(item => (

                        <div
                            key={item.id}
                            className="flex items-center gap-4 bg-base-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                        >

                            
                            <div className="text-2xl">

                                {item.type === "call" && (
                                    <IoCallOutline className="text-green-500" />
                                )}

                                {item.type === "text" && (
                                    <MdOutlineTextsms className="text-blue-500" />
                                )}

                                {item.type === "video" && (
                                    <FaVideo className="text-purple-500" />
                                )}

                            </div>

                           
                            <div>
                                <p className="font-semibold">

                                    <span className="capitalize">
                                        {item.type}
                                    </span>{" "}
                                    with {item.name}

                                </p>

                                <p className="text-sm text-gray-500">
                                    {item.date}
                                </p>
                            </div>

                        </div>
                    ))
                }

            </div>

        </div>
    );
};

export default Timeline;