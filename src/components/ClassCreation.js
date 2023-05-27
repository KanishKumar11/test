import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import db from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { selectGroupId } from '../features/groupSlice'
import firebase from 'firebase'
import { setClassInfo } from '../features/classSlice'

function ClassCreation() {
  const [ClassName, setClassName] = useState('')
  const navigate = useNavigate()
  const groupId = useSelector(selectGroupId)
  const dispatch = useDispatch()


  const handleClass = async(ClassName) => {

   const ref = await db.collection('classes').add({
      class_name: ClassName,
      admission_fee: '0',
      class_fee: '0',
      class_id: '',
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
      group_id: groupId,
      selected: "",
      subjects: []
    })

    let classId = ref.id
    console.log('the Classid is',ref.id);
    console.log('the gid is', groupId);

    dispatch(setClassInfo({
      classId:classId
    }))
    

    await ref.update({
      class_id: classId,
    })
    navigate('/SubjectCreation')
  }
  return (

    <div className=''>
      <h1>Setup a Class for your school</h1>
      <h3>class name</h3>
      <input placeholder='enter your class' value={ClassName} onChange={e => setClassName(e.target.value)} />
      <p>* The name of your class </p>
      <button onClick={() => { handleClass(ClassName) }}>CREATE CLASS</button>
    </div>
  )
}

export default ClassCreation