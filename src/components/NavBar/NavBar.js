import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow mb-5">
                <div className="container">
                    <div className="col">
                        <Link to='/'>
                            <img src="http://localhost:3000/Images/logo-pediGO.svg" alt="PediGo" height={50}/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="col collapse navbar-collapse d-flex justify-content-center" id="navbarContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <NavLink to={`/category/marino`} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Marino</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to={`/category/criollo`} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Criollo</NavLink> 
                            </li>
                            <li className="nav-item">
                            <NavLink to={`/category/oriental`} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Oriental</NavLink>
                            </li>
                        </ul>
                        
                    </div>
                    <div className="col d-flex justify-content-end">
                        <CartWidget />
                    </div>

                </div>
            </nav>
            
        


    )
}

export default NavBar