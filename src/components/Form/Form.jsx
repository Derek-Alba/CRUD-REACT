import { useForm } from "react-hook-form";

const Form = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="mb-3">
                    <div className="mb-3">
                        <label
                            htmlFor="NombreMateria"
                            className="form-label"> Nombre de la Materia</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nameMateria"
                            {...register('materia', { required: 'Este campo es requerido' })}
                        />
                       {errors.materia?.type === "required" && (
                            <p role="alert" className="text-danger">{errors.materia.message}</p>
                        )}
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="nombreProfesor"
                            className="form-label">Profesor</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nameProfesor"
                            {...register('profesor', { required: 'Este campo es requerido' })} />
                        {errors.profesor?.type === "required" && (
                            <p role="alert" className="text-danger">{errors.profesor.message}</p>
                        )}
                    </div>
                    <select {...register('grado', { required: 'Este campo es requerido' })} className="form-select mb-3">
                        <option value=''>Seleccionar Grado</option>
                        <option value="primeroBasico">Primero Basico</option>
                        <option value="segundoBasico">Segundo Basico</option>
                        <option value="terceroBasico">Tercero Basico</option>
                    </select>
                    {errors.grado?.type === "required" && (
                            <p role="alert" className="text-danger">{errors.grado.message}</p>
                        )}
                    <div className="mb-3">
                        <label
                            htmlFor="email"
                            className="form-label">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            {...register('email', {
                                required: 'Este campo es requerido',
                                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
                            })}

                        />
                        {errors.email?.type === "required" && (
                            <p role="alert" className="text-danger">{errors.email.message}</p>
                        )}
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary">Enviar</button>
            </form>
        </>
    );
}

export default Form;