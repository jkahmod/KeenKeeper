import { createContext, useState, useRef } from "react";
import { toast } from "react-toastify";

export const ActivityContext = createContext();

const ActivityProvider = ({ children }) => {
    const [activities, setActivities] = useState([]);
    const lastToastRef = useRef(null);

    const handleAddActivity = (friend, type) => {

        setActivities(prev => {

            const alreadyExists = prev.find(
                item => item.name === friend.name && item.type === type
            );

            if (alreadyExists) {
                if (lastToastRef.current !== `${friend.name}-${type}-error`) {
                    toast.error("Already added!");
                    lastToastRef.current = `${friend.name}-${type}-error`;
                }
                return prev;
            }

            const newItem = {
                id: Date.now(),
                name: friend.name,
                picture: friend.picture,
                type,
                date: new Date().toLocaleString()
            };

            if (lastToastRef.current !== `${friend.name}-${type}-success`) {
                toast.success(`${type} added!`);
                lastToastRef.current = `${friend.name}-${type}-success`;
            }

            return [newItem, ...prev];
        });
    };

    return (
        <ActivityContext.Provider value={{ activities, handleAddActivity }}>
            {children}
        </ActivityContext.Provider>
    );
};

export default ActivityProvider;