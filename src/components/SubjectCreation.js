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
    <div>
      <input placeholder='create a subject' value={Sub} onChange={(e)=>{setSub(e.target.value)}} />
      <button onClick={()=>{handleClick(Sub)}}>chat</button>
    </div>
  )
}

export default SubjectCreation