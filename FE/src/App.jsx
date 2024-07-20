import {Routes, Route} from "react-router-dom";

import './App.css'
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";

function App() {
    return (
        <div className='p-4 h-screen flex items-center jstify-center'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<SignUp/>}/>
            </Routes>
        </div>
    )
}

export default App
