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


function Sibebar() {
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
    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data()
            })))
        ))
    }, [])

    const handleChannel = () => {
        // const channelName = prompt('Enter a channel name')
        // const channelUrl = prompt('Enter a channel Url')
        // if (channelName) {
        //     db.collection('channels').add({
        //         channelName: channelName,
        //     })
        // }
        navigate('/ServerCreation')
    }

    const handleClass = (id) => {

        db.collection('classes').onSnapshot(snap=>(
            setClasses(snap.docs.map(doc=>({
                classid : doc.id,
                classes: doc.data(),
                gid: doc.data().group_id
            })))
        ))
            classes.map((gid)=>(
                <div>{gid.gid === id ? setMyClasses(gid.classes) : ''}</div>
                
            ))

            setActive(true)
            console.log('my classes name are', Myclasses.class_name);   
            console.log('my classes are', Myclasses); 
            console.log('my subs are', Myclasses.subjects);  
    }

    const handleSubjects = (id) => {

        setSubActive(true)
    }

    useEffect(() => {
        db.collection('groups').onSnapshot(snap => (
            setGroupsUrl(snap.docs.map(doc => ({
                url: doc?.data().group_image_uri,
                id: doc.id,
                group: doc.data()
            })))
        ))
        console.log(groupsUrl.url);
    }, [])


    const handleSubChat = () =>{
        dispatch(setChannelInfo({
            subjects: Myclasses.subjects
        }))
    }


    return (
        <div className="sidebar">
            <div className="sidebar">

                {groupsUrl.map((id) => (
                    <div onClick={()=>handleClass(id.id)} className='sidebar'>
                        {id.group.admin_id === user?.uid ? (
                            <img src={groupsUrl.url} alt='img' style={{ height: '40px', width: "40px", }} />
                        ) : ''}
                    </div>
                ))}

                {active ? (
                    <div onClick={()=>handleSubjects()}> <p>{Myclasses.class_name}</p></div>
                   
                ) : ''}

                {Subactive ? (
                    <div onClick={()=>handleSubChat()}><p>{Myclasses.subjects}</p></div> 
                ) : ''}


                <AddIcon
                    onClick={handleChannel}
                    className="sidebar__addChannel" />
            </div>
            {/* <div className = "sidebar__top"> */}
            {/* <h3>{user?.displayName}</h3> */}
            {/* <ExpandMoreIcon /> */}
            {/* </div> */}
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        {/* <h4>Text Channels</h4> */}
                    </div>
                    {/* <AddIcon 
                         onClick = {handleChannel} 
                         className = "sidebar__addChannel" />  */}
                </div>
                <div className="sidebar__channelsList">
                    {channels.map(({ id, channel }) => (
                        <SidebarChannel
                            key={id}
                            id={id}
                            channelName={channel?.channelName}
                        />
                    ))}
                </div>
            </div>
            {/* <div className = "sidebar__voice">   */}
            {/* <SignalCellularAltIcon 
                    className = "sidebar__cellularVoiceIcon"
                    fontSize = "large"
                /> */}
            {/* <div className = "sidebar__voiceInfo"> */}
            {/* <h3>Voice Connected</h3> */}
            {/* <p>Stream</p> */}
            {/* </div> */}
            {/* // <div className = "sidebar__voiceIcon"> */}
            {/* <InfoOutlinedIcon /> */}
            {/* <CallIcon /> */}
            {/* </div> */}
            {/* </div> */}
            {/* <div className='sidebar__profile'> */}
                {/* <Avatar
                    className="sidebar__profileAvatar"
                    onClick={() => {
                        auth.signOut()
                        navigate('/')
                    }}
                    src={user?.photo}
                /> */}
                {/* <div className="sidebar__profileInfo"> */}
                    {/* <h3>{user?.displayName}</h3> */}
                    {/* <p>{user?.uid.substring(0, 5)}</p> */}
                {/* </div> */}
                {/* <div className = "sidebar__profileIcons"> */}
                {/* <MicIcon /> */}
                {/* <HeadSetIcon /> */}
                {/* <SettingsIcon /> */}
                {/* </div> */}
            {/* </div> */}
        </div>
    )
}

export default Sibebar
