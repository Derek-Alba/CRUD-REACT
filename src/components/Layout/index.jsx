import { Route, Routes } from "react-router-dom"
import Estudiantes from "../Estudiantes"
import NavBar from "../NavBar"
import Materias from '../Materias'
import Auth from '../Auth'
const Layout = () => {
    return (
        <>
            <Auth>
                <NavBar />
                <div className="container">
                    <Routes>
                        <Route path="/usuarios" element={<Estudiantes />} />
                        <Route path="/materias" element={<Materias />} />
                    </Routes>
                </div>
            </Auth>
        </>
    )
}

export default Layout
