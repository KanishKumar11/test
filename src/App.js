import Chat from './Chat';
import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './Sibebar'
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import {auth} from './firebase'
import ServerCreation from './components/ServerCreation';

import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ClassCreation from './components/ClassCreation';
import SubjectCreation from './components/SubjectCreation';
import ChatUI from './components/ChatUI';
import ServerSettings from './components/ServerSettings';


function App() {
  // const dispatch = useDispatch()
  // const user = useSelector(selectUser);
  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     console.log('user is' ,authUser)
  //     if(authUser){
  //       dispatch( login({
  //         uid: authUser.uid,
  //         photo: authUser.photoURL,
  //         email: authUser.email,
  //         displayName: authUser.displayName
  //       })
  //       )
  //     } else{
  //       //log out
  //       dispatch(logout())
  //     }
  //   })
  // }, [dispatch])
  return (
    <div className="app bg-black">
       <Router>
        <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route exact path="/ServerCreation" element={<ServerCreation/>}></Route>
        <Route exact path="/ServerSettings" element={<ServerSettings/>}></Route>
        <Route exact path="/ClassCreation" element={<ClassCreation/>}></Route>
        <Route exact path="/SubjectCreation" element={<SubjectCreation/>}></Route>
        <Route exact path="/ChatUI" element={<ChatUI/>}></Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
