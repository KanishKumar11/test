import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import SidebarChannel from './SidebarChannel'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import CallIcon from '@material-ui/icons/Call'
import { Avatar } from '@material-ui/core'
import HeadSetIcon from '@material-ui/icons/Headset'
import MicIcon from '@material-ui/icons/Mic'
import SettingsIcon from '@material-ui/icons/Settings'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { auth } from './firebase'
import db from './firebase'
import { useNavigate } from 'react-router-dom'
import { setChannelInfo } from './features/appSlice'


function RightSibebar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(selectUser)
    const [channels, setChannels] = useState([])
    const [groupsUrl, setGroupsUrl] = useState([])
    const [classes, setClasses] = useState([])
    const [Myclasses, setMyClasses] = useState([])
    const [MySub, setMySub] = useState([])
    const [active, setActive] = useState(false)
    const [Subactive, setSubActive] = useState(false)

    return (
        <div className="sidebar">
            <div className="sidebar">
            </div>
            <div className = "sidebar__top">
                <div onClick={()=>{navigate('ServerSettings')}}>Server settings</div>
                <div>Addendence</div>
                <div> Notification</div>
            </div>

            <div className = "sidebar__topx">
                <div className='mb-10'>Routine Structure</div>
                <div>Subject Priority</div>
                <div>Fee Structure</div>
                <div>Notice</div>
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                    </div>
                </div>
                <div className="sidebar__channelsList">
                </div>
            </div>
        
            <div className='sidebar__profile'>
                <Avatar
                    className="sidebar__profileAvatar"
                    onClick={() => {
                        auth.signOut()
                        navigate('/')
                    }}
                    src={user?.photo}
                />
                <div className="sidebar__profileInfo">
                    <h3>{user?.displayName}</h3>
                </div>
            </div>
        </div>
    )
}

export default RightSibebar
