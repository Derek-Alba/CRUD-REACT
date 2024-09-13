import { useContext, useEffect } from "react"
import { EstudiantesContext } from '../../context'
import MyModal from '../MyModal'
import './style.css'
import ButtonDelete from "./buttonDelete"
import ButtonEdit from "./buttonEdit"
import ButtonCreateUser from "./buttonCreateUser"
function Estudiantes() {
  const { obtenerUser, handleForm, isModalOpen, updateUser,
    form, successCreateUser, handleEdit, resetForm,
    searchStudent, modalDelete, setSearchStudent,
    estudiantes, setModalDelete, handleDelete, deleteUser,
    setIsOpenModal, saveUser, next, back, users
  } = useContext(EstudiantesContext)
  let cont = 1

  useEffect(() => {
    obtenerUser()
  }, [updateUser, modalDelete, successCreateUser, isModalOpen])


  const studentFilter = estudiantes.filter(student => (
    student.name.toLowerCase().includes(searchStudent.toLowerCase())
  ))
  return (
    <>
      {
        isModalOpen &&
        <MyModal
          tittle={'Crear Usuario'}
          cerrarModal={setIsOpenModal}
          aceptarCambios={saveUser}
        >
          <div className="mb-3 w-100 d-flex flex-column  align-items-center">
            <input onChange={(event) => handleForm(event)} value={form.name} name='name' type='text' className="form-control mb-3" placeholder="Nombre Usuario" />
            <input onChange={(event) => handleForm(event)} value={form.email} name='email' type="email" className="form-control mb-3" placeholder="Email" />
            <input onChange={(event) => handleForm(event)} value={form.password} name='password' type="password" className="form-control mb-3 " placeholder="Password" />
            <input onChange={(event) => handleForm(event)} value={form.avatar} name='avatar' type="text" className="form-control mb-3" placeholder="Avatar" />
          </div>

        </MyModal>
      }
      {modalDelete &&
        <MyModal
          tittle={'Delete User'}
          cerrarModal={setModalDelete}
          aceptarCambios={deleteUser}
          textButtonSuccess={'Eliminar'}>
          <div className="mb-5 w-50 p-4 " style={{ zIndex: 1, position: 'absolute', }}>
            <p className=" text-center mt-5 fs-4">Are you sure?</p>
          </div>
        </MyModal>
      }
      <div className='container text-center'>
        <div> <input type="text" className='p-2 rounded-3  ' placeholder="Search..." onChange={(event) => setSearchStudent(event.target.value)} /></div>
        <div className='d-flex justify-content-end'>
          <ButtonCreateUser
            onCreate={() => {
              setIsOpenModal(true)
              resetForm()
            }} />

        </div>
        <div className={successCreateUser || updateUser ? "alert alert-success" : 'hidden'} role="alert">
          {successCreateUser && 'Se ha guardado correctamente'}
          {updateUser && 'Se ha actualizado correctamente'}
        </div>

        <table className="table table-hover me-auto mb-2 mb-lg-0  " >
          <thead>
            <tr className='text-center' >
              <th>#</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Role</th>
              <th>Password</th>
              <th>Avatar</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {
              studentFilter.length > 0 ?
                studentFilter.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td>{item.password}</td>
                    <td><img src={item.avatar} height='100' width='100' /></td>
                    <td >
                      <div className="d-flex justify-content-center mt-4 gap-3">
                        <ButtonEdit
                          onEdit={() => handleEdit(item.id)} />
                        <ButtonDelete
                          onDelete={() => handleDelete(item.id)}
                        />
                      </div>
                    </td>
                  </tr>
                )) : <tr className='text-center'><th>NO HAY COICIDENCIA</th></tr>
            }

          </tbody>
        </table>
      </div>
      <nav aria-label="Page navigation example ">
        <ul className="pagination d-flex justify-content-center mt-3">
          <li className="page-item"><a className="page-link" onClick={back}>Previous</a></li>
          {
            users.map((item, index) => {
              if (index % 10 === 0) {
                return <li className="page-item"><a className="page-link" href="#">{cont++}</a></li>
              }
            })
          }
          <li className="page-item"><a className="page-link" onClick={next}>Siguiente</a></li>
        </ul>
      </nav>

    </>
  )
}

export default Estudiantes
