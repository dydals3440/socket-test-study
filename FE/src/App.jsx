import {Routes, Route, Navigate} from "react-router-dom";
import {Toaster} from 'react-hot-toast';

import './App.css'
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import {useAuthContext} from "./context/AuthContext.jsx";

function App() {
    const {authUser} = useAuthContext();
    return (
        <div className='p-4 h-screen flex items-center jstify-center'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={authUser ? <Navigate to={"/"}/> : <SignUp/>}/>
            </Routes>
            <Toaster/>
        </div>
    )
}

export default App
