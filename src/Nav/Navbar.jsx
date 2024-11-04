import { Link } from "react-router-dom"
import './nav.css'
import logo from '../img/v-high-resolution-logo-removebg-preview.png'
import DarkMode from "../DarkMode/DarkMode"
function Navbar() {
    return (
        <div className="contanier-nav">
            <div className="container">
                <nav className={scrollY ? "active" : ""}>
                    <Link  to='/'><img src={logo} alt="" /></Link>
                    <div className="ul-box">
                        <ul>
                            <Link to='/onas'><li>Home</li></Link>
                            <Link to='/about'><li>About</li></Link>
                            <Link to='/info'><li>Info</li></Link>

                        </ul>
                    </div>
                    <DarkMode/>
                    <Link to='/signup'><button>SignUp</button></Link> 
                </nav>
            </div>
        </div>
    )
}

export default Navbar
