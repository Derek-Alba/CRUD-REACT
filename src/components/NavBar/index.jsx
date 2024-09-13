import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { EstudiantesContext } from "../../context"
const NavBar = () => {
    const { setErrorLogin } = useContext(EstudiantesContext)
    const navigate = useNavigate()
    const cerrarSesion = () => {
        localStorage.removeItem('user')
        navigate('/')
        setErrorLogin(false)


    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink 
                className="navbar-brand"
                to={'/'}>
                    Home
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to={'/usuarios'}>
                                Usuarios
                            </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink
                                className="nav-link"
                                to={'/materias'} >
                                Materias
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav  d-flex justify-content-end">
                        <li className="nav-item">
                            <button
                                className='nav-link text-right'
                                onClick={() => cerrarSesion()}>
                                Cerrar Sesion
                            </button>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default NavBar