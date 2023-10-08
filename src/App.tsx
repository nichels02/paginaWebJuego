import './App.css'

import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainHeader from "./common/MainHeader.tsx";
import MainFooter from "./common/MainFooter.tsx";
import MainNav from "./common/MainNav.tsx";
import Home from "./pages/Home.tsx";
import Game from "./pages/Game.tsx";
import Game2 from "./pages/Game2.tsx";

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
                </Routes>
                <MainFooter/>
            </BrowserRouter>
        </>
    );
}

export default App
