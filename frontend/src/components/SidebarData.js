import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import RoomIcon from '@material-ui/icons/Room';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon/>,
        link: "/Home",
    },
    {
        title: "Settings",
        icon: <SettingsIcon/>,
        link: "/Settings",
    },
    {
        title: "Map",
        icon: <RoomIcon/>,
        link: "/Location",
    },
    {
        title: "Updates",
        icon: <DynamicFeedIcon/>,
        link: "/SensorUpdate",
    },
]