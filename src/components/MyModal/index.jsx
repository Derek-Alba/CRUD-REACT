import { useContext } from "react"
import { EstudiantesContext } from "../../context"


const MyModal = ({ children, cerrarModal, tittle, aceptarCambios, textButtonSuccess }) => {
    const { 
        isEdit,
        errorLogin,
        errores } = useContext(EstudiantesContext)
    return (
        <>
            <div
                className="d-flex justify-content-center align-items-center "
                style={{
                    zIndex: '1', position: 'fixed', left: '0', top: '0', width: '100%', height: '100%',
                    backgroundColor: 'rgba(34,34,34,0.90)'
                }}>
                <div
                    className="p-3"
                    style={{ zIndex: 1, position: 'absolute' }}>
                    <div className="card">
                        <div className="card-content">
                            <p className="card-heading">{tittle}</p>
                            <div className={errorLogin ? "alert alert-danger" : 'hidden'} role="alert">
                                <ul>
                                    {
                                        errores.map(error => (
                                            <li key={error}> {error} </li>
                                        ))}
                                </ul>
                            </div>
                            <div className="card-button-wrapper mb-5">
                                {children}
                            </div>
                            <div className="d-flex gap-3">
                                <button
                                    type="button"
                                    className=" card-button-wrapper card-button secondary"
                                    onClick={() => cerrarModal(false)}>
                                    Cerrar
                                </button>
                                <button
                                    onClick={() => aceptarCambios()}
                                    type="button"
                                    className=" card-button-wrapper card-button primary">
                                    {textButtonSuccess}
                                    {textButtonSuccess ? '' : isEdit ? 'Editar' : 'Guardar'}
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default MyModal