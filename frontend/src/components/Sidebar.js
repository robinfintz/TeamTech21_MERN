import React from 'react'
import '../App.css'
import {SidebarData} from './SidebarData.js'

const Sidebar = (props) => {
    console.log(SidebarData)
    return (
        <div className = "Sidebar split left">
            <ul className = "SidebarList">
            {SidebarData.map((val, k) =>{
                return <li key={k}  className="row" id = {window.location.pathname == val.link ? "active" : ""} onClick={()=>window.location.pathname = val.link}>
                    {" "}
                    <div id="icon">{val.icon}</div>
                    {" "}
                    <div id="title">{val.title}</div>
                </li>
            })}
            </ul>
        </div>
    )
}

export default Sidebar;
