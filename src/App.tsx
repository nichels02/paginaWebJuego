import './App.css'

import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainHeader from "./common/MainHeader.tsx";
import MainFooter from "./common/MainFooter.tsx";
import MainNav from "./common/MainNav.tsx";
import Home from "./pages/Home.tsx";
import Game from "./pages/Game.tsx";
import Game2 from "./pages/Game2.tsx";
import Game3 from "./pages/Game3.tsx";
import Login from "./pages/login.tsx";
import Game4 from "./pages/Game4.tsx";

function App() {
    return(
        <>
            <BrowserRouter>
                <MainHeader/>
                <MainNav/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Game' element={<Game/>}/>
                    <Route path='/Game2' element={<Game2/>}/>
                    <Route path='/Game3' element={<Game3/>}/>
                    <Route path='/Game4' element={<Game4/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
                <MainFooter/>
            </BrowserRouter>
        </>
    );
}

export default App
