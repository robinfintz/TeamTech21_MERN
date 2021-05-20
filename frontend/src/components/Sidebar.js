import React from 'react'
import '../App.css'
import {SidebarData} from './SidebarData.js'

const Sidebar = (props) => {
    console.log(SidebarData)
    return (
        <div className = "Sidebar">
            <ul className = "SidebarList">
            {SidebarData.map((val, k) =>{
                return <li key={k} onClick={()=>window.location.pathname = val.link} className="row">
                    {" "}
                    <div>{val.icon}</div>
                    {" "}
                    <div>{val.title}</div>
                </li>
            })}
            </ul>
        </div>
    )
}

export default Sidebar;
