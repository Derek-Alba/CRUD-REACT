import { Route, Routes } from "react-router-dom"
import Estudiantes from "../Estudiantes"
import NavBar from "../NavBar"
import Auth from '../Auth'
import Profile from '../Profile'
import Materias from "../../pages/Materias/Materias"
const Layout = () => {
    return (
        <>
            <Auth>
                <NavBar />
                <div className="container">
                    <Routes>
                        <Route path="/usuarios" element={<Estudiantes />} />
                        <Route path="/materias" element={<Materias />} />
                        <Route path="/profile/:id" element={<Profile />} />
                    </Routes>
                </div>
            </Auth>
        </>
    )
}

export default Layout
