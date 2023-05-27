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
        <div className = "login">
            <div className = "login__logo">
                <h2 className='text-5xl'>Classify</h2>
            </div>
            <Button 
                onClick = {signIn}
                className ="login__button">Sign In</Button>
        </div>
    )
}

export default Login
