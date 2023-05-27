import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import db from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { Button } from '@material-ui/core'
import { selectGroupId, setGroupInfo } from '../features/groupSlice'
import firebase from 'firebase'

function ServerCreation() {
  const user = useSelector(selectUser)
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const groupId = useSelector(selectGroupId)

  const ServerCreation = async(servername) =>{

    const ref = await db.collection('groups').add({
      group_name: servername,
      admin_id: user?.uid,
      group_id: '',
      group_image_uri:' https://firebasestorage.googleapis.com/v0/b/cllasifysquad.appspot.com/o/profiles%2Fserver%2FUni_Group_no_0_Demo.jpg?alt=media&token=8fd1b502-86d1-44cf-85da-2568875b7a15',
      created_at: `${firebase.firestore.FieldValue.serverTimestring()}`,
      teacher_requests: [],
      teachers: [],
      group_upi_id: '',
      group_email: '',
      group_desc: '',
      group_category: "PUBLIC",
      expandable: false


      })    

  const GroupId = ref.id
  console.log("the group id is", GroupId);

  dispatch(setGroupInfo({
    groupId: GroupId
  }))

  await ref.update({
    group_id: GroupId
  })
  
  console.log('the gid id', groupId);
      navigate('/ClassCreation')
  }

  const [servername,setServerName] = useState('')

  return (
    <div className='text-center bg-gray-800 h-[100vh] items-center justify-between w-full flex flex-col text-white'>
      <div className='self-start items-center flex justify-center font-[600] text-[23px] w-full relative p-7'>
        <span className='text-[40px] font-[800] absolute left-3'>&larr;</span><span className='self-center items-center'>Create server</span></div>
        <div>
      <h1 className='text-white text-[23px] font-[700] my-10'>Setup a server for your school</h1>
      <h3 className='my-10 text-gray-400'>server name</h3>
      <input required value={servername} onChange={(e)=>{setServerName(e.target.value)}} placeholder='Server name' className='bg-transparent my-10 w-[80%] border-b-2 border-blue-700 text-center px-5' />
      <p> *The name of your education Institutions like schools</p>
      <button onClick={()=>{ServerCreation(servername)}} className='bg-blue-600 px-20 py-5 rounded-[4rem] my-5'>CREATE SERVER</button>
      </div>
      <div></div>
    </div>
  )
}

export default ServerCreation