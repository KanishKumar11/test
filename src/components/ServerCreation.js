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
    <div className='text-center bg-black'>
      <h1 className='text-red-700'>Setup a server for your school</h1>
      <h3>server name</h3>
      <input required vlaue={servername} onChange={(e)=>{setServerName(e.target.value)}} placeholder='Server name' />
      <p> *The name of your education Institutions like schools</p>
      <button onClick={()=>{ServerCreation(servername)}}>CREATE SERVER</button>
    </div>
  )
}

export default ServerCreation