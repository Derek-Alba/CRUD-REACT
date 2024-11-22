import axios from "axios"
import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"
export const EstudiantesContext = createContext()

export const EstudiantesProvider = ({ children }) => {
    const navigate = useNavigate()
    const [isEdit, setIsEdit] = useState(false)
    const [id, setId] = useState(null)
    const [searchStudent, setSearchStudent] = useState('')
    const [estudiantes, setEstudiantes] = useState([])
    const [errorLogin, setErrorLogin] = useState(false)
    const [successCreateUser, setSuccessCreateUser] = useState(false)
    const [updateUser, setUpdateUser] = useState(false)
    const [errores, setErrores] = useState([])
    const [isModalOpen, setIsOpenModal] = useState(false)
    const [modalDelete, setModalDelete] = useState(false)
    const [users, setUsers] = useState([])
    const [profile, setProfile] = useState({})
    const [form, setForm] = useState(
        { name: '', email: '', password: '', avatar: '' }
    )
    const [itemsByPage, setItemsByPage] = useState(10)

    const handleForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const saveUser = async () => {
        if (isEdit) {
            try {
                await axios.put(`https://api.escuelajs.co/api/v1/users/${id}`, form)
                setIsOpenModal(false)
                setUpdateUser(true)
                setSuccessCreateUser(false)
                setErrores([])
            } catch (error) {
                if (error.status !== 400) {
                    setErrores(['Ocurrio un error en el servidor, Intenta de nuevo'])
                    setErrorLogin(true)

                } else {
                    setErrores(error.response.data.message)
                    setErrorLogin(true)
                    setIsOpenModal(true)
                }
            }
        } else {
            try {
                await axios.post('https://api.escuelajs.co/api/v1/users/', form)
                setSuccessCreateUser(true)
                setIsOpenModal(false)
                setErrorLogin(false)
                setErrores([])
                setUpdateUser(false)
            } catch (error) {
                setErrores(error.response.data.message)
                setSuccessCreateUser(false)
                setErrorLogin(true)

            }
        }


    }
    const handleEdit = async (id) => {
        setErrorLogin(false)
        setErrores([])
        setIsOpenModal(true)
        const response = await axios.get(`https://api.escuelajs.co/api/v1/users/${id}`)
        setForm(response.data)
        setIsEdit(true)
        setId(id)
    }
    const updateStudent = async (id, data) => {
        try {
            await axios.put(`https://api.escuelajs.co/api/v1/users/${id}`, data)
            setIsOpenModal(false)
            setUpdateUser(true)
            setSuccessCreateUser(false)
            setErrores([])
        } catch (error) {
            if (error.status !== 400) {
                setErrores(['Ocurrio un error en el servidor, Intenta de nuevo'])
                setErrorLogin(true)

            } else {
                setErrores(error.response.data.message)
                setErrorLogin(true)
                setIsOpenModal(true)
            }

        }


    }
    const resetForm = () => {
        setErrorLogin(false)
        setErrores([])
        setIsEdit(false)
        setId(null)
        setForm({ name: '', email: '', password: '', avatar: '' })

    }
    const handleDelete = (id) => {
        setModalDelete(true)
        setErrorLogin(false)
        setErrores([])
        setId(id)
    }
    const deleteUser = async () => {
        await axios.delete(`https://api.escuelajs.co/api/v1/users/${id}`)
        setId(null)
        setModalDelete(false)


    }

    const Login = async (event, email, password) => {
        event.preventDefault()
        try {
            const user = await axios.post('https://api.escuelajs.co/api/v1/auth/login',
                { email, password });
            if (user.status === 201) {
                navigate('/usuarios')
                localStorage.setItem('user', JSON.stringify(user.data))
            }
        } catch (error) {
            setErrorLogin(true)

        }

    }

    const obtenerUser = async () => {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/users`);
        setUsers(response.data)
        setEstudiantes(response.data.slice(0, itemsByPage))
    }
    const next = () => {
        if (itemsByPage >= 10) {
            setEstudiantes(users.slice(itemsByPage, itemsByPage + 10))
            setItemsByPage(itemsByPage + 10)
        }
    }
    const back = () => {
        setEstudiantes(users.slice(itemsByPage - 20, itemsByPage - 10))
        setItemsByPage(itemsByPage - 10)
    }
    const cargarPerfil = async (id) => {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/users/${id}`)
        setProfile(response.data)
    }
    return (
        <EstudiantesContext.Provider value={
            {
                form,
                handleForm,
                saveUser,
                estudiantes,
                setEstudiantes,
                handleEdit,
                resetForm,
                updateStudent,
                isEdit,
                id,
                setSearchStudent,
                searchStudent,
                Login,
                errorLogin,
                obtenerUser,
                successCreateUser,
                setSuccessCreateUser,
                isModalOpen,
                errores,
                setIsOpenModal,
                updateUser,
                setModalDelete,
                modalDelete,
                handleDelete,
                deleteUser,
                setErrorLogin,
                next,
                back,
                users,
                cargarPerfil,
                profile



            }

        }>
            {children}
        </EstudiantesContext.Provider>
    )
}


