import React, { createContext, useState, useContext } from "react";
import { AlertTriangle, Zap, CloudRain, Info } from "lucide-react";

// Helper to map icons string/type to actual component if needed, 
// strictly for initial state we can import them. 
// For dynamic we might need a mapping strategy, but for now we'll keep it simple.

const AlertContext = createContext();

export const useAlerts = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
    const [alerts, setAlerts] = useState([
        {
            id: 1,
            type: "critical", // red
            title: "Wildlife Alert: Elephant Sighted",
            message:
                "Wild elephant spotted near Sector B market area. Residents are advised to stay indoors and avoid the forest edge road.",
            time: "10 mins ago",
            icon: "AlertTriangle", // storing as string for simpler serialization if needed, or mapping
        },
        {
            id: 2,
            type: "warning", // yellow
            title: "Power Outage Scheduled",
            message:
                "Maintenance work on Main St. Power will be down from 2:00 PM to 5:00 PM today.",
            time: "2 hours ago",
            icon: "Zap",
        },
        {
            id: 3,
            type: "info", // blue
            title: "Heavy Rain Forecast",
            message:
                "Yellow alert issued for Wayanad district. Drive carefully on ghat roads due to potential slippery conditions.",
            time: "5 hours ago",
            icon: "CloudRain",
        },
    ]);

    const addAlert = (newAlert) => {
        // Determine icon based on type if not provided
        if (!newAlert.icon) {
            if (newAlert.type === 'critical') newAlert.icon = 'AlertTriangle';
            else if (newAlert.type === 'warning') newAlert.icon = 'Zap'; // or generic warning
            else newAlert.icon = 'Info';
        }

        setAlerts((prev) => [newAlert, ...prev]);
    };

    return (
        <AlertContext.Provider value={{ alerts, addAlert }}>
            {children}
        </AlertContext.Provider>
    );
};
