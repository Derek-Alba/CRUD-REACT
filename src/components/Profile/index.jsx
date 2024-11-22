import axios from "axios";
import { useContext, useEffect } from "react";
import { EstudiantesContext } from "../../context";
import { NavLink, useParams } from "react-router-dom";

const index = () => {
    const { cargarPerfil, profile } = useContext(EstudiantesContext)
    const { id } = useParams()
    useEffect(() => {
        cargarPerfil(id)
    })
    return (
        <>
            <div className="card w-25 d-flex justify-content-center align-content-center mt-5 container">
                <div className="card-body">
                    <img src={profile.avatar} className="img img-thumbnail rounded-5" />
                    <h4 className="card-title text-black mt-2">Name: {profile.name} </h4>
                    <p className="card-text">Email: {profile.email} </p>
                    <p className="card-text">Role: {profile.role} </p>
                    <NavLink className='btn btn-dark d-flex justify-content-center'
                    to={'/'}>
                        Home
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default index;