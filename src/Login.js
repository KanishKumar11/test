import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice'
import { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import ServerCreation from './components/ServerCreation'
import SidebarChannel from './SidebarChannel'



function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(selectUser);
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
          console.log('user is' ,authUser)
          if(authUser){
            dispatch( login({
              uid: authUser.uid,
              photo: authUser.photoURL,
              email: authUser.email,
              displayName: authUser.displayName
            })
            )
          } else{
            //log out
            dispatch(logout())
          }
        })
      }, [dispatch])

    const signIn = (e) => {
       auth.signInWithPopup(provider)
    }

    if(user){
      return (<ServerCreation/>)
    }


    return (
        <div className = "login relative overflow-hidden">
            <div className = "login__logo">

                <h2 className='text-5xl text-white'>Classify</h2>
            </div>
            <div className='flex text-white text-[30px] font-[800] self-start items-start w-full ml-20 lg:ml-[12rem] lg:text-[40px] '>
            <div className='text-gray-300'>
              Explore
            </div>
            <div>
              Education
            </div>
            </div>
            <Button 
                onClick = {signIn}
                className ="login__button bg-blue-600 rounded-lg py-10">Sign In With Google</Button>
            <video autoplay loop muted className='absolute inset-0 w-full h-full object-cover z-10' >
              <source src="../public/back.mp4" type='video/mp4'/>
              Your browser not supports video
              </video>
        </div>
    )
}

export default Login
