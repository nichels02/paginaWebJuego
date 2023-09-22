import './App.css'

import {BrowserRouter} from "react-router-dom";
import MainHeader from "./common/MainHeader.tsx";
import MainFooter from "./common/MainFooter.tsx";
import MainBanner from "./common/MainBanner.tsx";
import MainNav from "./common/MainNav.tsx";

function App() {
    return(
        <>
            <BrowserRouter>
                <MainHeader/>
                <MainFooter/>
                <MainBanner/>
                <MainNav/>
                <Routes>
                    <Route path='/' elemental
                </Routes>
            </BrowserRouter>
        </>
    );
}


export default App
