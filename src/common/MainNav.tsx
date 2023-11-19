import {Link} from "react-router-dom";
import './MainNav.css';

function MainNav(){
    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary sticky-top bg-dark'>
            <div className='conteiner'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className="nav1-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>

                    <li className="nav1-item">
                        <Link className="nav-link" to="/game">Game</Link>
                    </li>


                    <li className="nav1-item">
                        <Link className="nav-link" to="/game2">Game2</Link>
                    </li>

                    <li className="nav1-item">
                        <Link className="nav-link" to="/game3">Game3</Link>
                    </li>

                    <li className="nav1-item">
<<<<<<< Updated upstream
                        <Link className="nav-link" to="/login">Login/Register</Link>
=======
                        <Link className="nav-link" to="/game4">Game4</Link>
                    </li>

                    <li className="nav2-item">
                        <Link className="nav-link" to="/login">Login</Link>
>>>>>>> Stashed changes
                    </li>
                </ul>

            </div>
        </nav>
    )
}
export default MainNav