import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import db from '../firebase'
import { useSelector } from 'react-redux'
import { selectclassId } from '../features/classSlice'
import firebase from 'firebase'

function SubjectCreation() {
  const [Sub, setSub] = useState('')
  const navigate = useNavigate()
  const classId = useSelector(selectclassId)

  const handleClick = async(Sub) =>{

    await db.collection('classes').doc(classId).update({
      subjects: firebase.firestore.FieldValue.arrayUnion(Sub)
    })

    navigate('/ChatUI')
  }
  return (
    <div className='text-center bg-gray-800 h-[100vh] items-center justify-between w-full flex flex-col text-white'>
    <div className='self-start items-center flex justify-center font-[600] text-[23px] w-full relative p-7'>
      <span className='text-[40px] font-[800] absolute left-3'>&larr;</span><span className='self-center items-center'>Create subject</span></div>
      <div>
    <h1 className='text-white text-[23px] font-[700] my-10'>Create a subject in your class</h1>
    <h3 className='my-10 text-gray-400'>Class name</h3>
    <input required placeholder='create a subject' value={Sub} onChange={(e)=>{setSub(e.target.value)}} className='bg-transparent my-10 w-[80%] border-b-2 border-blue-700 text-center px-5' />
    <p> *It will create a new class in the server</p>
    <button onClonClick={()=>{handleClick(Sub)}} className='bg-blue-600 px-20 py-5 rounded-[4rem] my-5'>chat</button>
    </div>
    <div></div>
  </div>

  )
}

export default SubjectCreation