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
    <div className='text-center bg-gray-800 h-[100vh] items-center justify-between w-full flex flex-col text-white'>
      <div className='self-start items-center flex justify-center font-[600] text-[23px] w-full relative p-7'>
        <span className='text-[40px] font-[800] absolute left-3'>&larr;</span><span className='self-center items-center'>Create class</span></div>
        <div>
      <h1 className='text-white text-[23px] font-[700] my-10'>Create a class for your server</h1>
      <h3 className='my-10 text-gray-400'>Class name</h3>
      <input required value={ClassName} onChange={e => setClassName(e.target.value)} placeholder='Type here...' className='bg-transparent my-10 w-[80%] border-b-2 border-blue-700 text-center px-5' />
      <p> *It will create a new class in the server</p>
      <button onClick={()=>{handleClass(ClassName)}} className='bg-blue-600 px-20 py-5 rounded-[4rem] my-5'>CREATE Class</button>
      </div>
      <div></div>
    </div>
   
  )
}

export default ClassCreation