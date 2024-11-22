import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../components/Login"
import Layout from '../components/Layout'
import { EstudiantesProvider } from "../context"
import Crud from "../pages/Crud/Crud"
const Router = () => {

    return (
        <>
            <BrowserRouter>
                <EstudiantesProvider>
                    <Routes>

                        <Route path="/" element={<Login />} />
                        <Route path="/crud" element={<Crud />} />
                        <Route path="/*" element={<Layout />} />
                    </Routes>
                </EstudiantesProvider>
            </BrowserRouter>

        </>
    )
}

export default Router  