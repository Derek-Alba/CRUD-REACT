const ButtonCreateUser = ({ onCreate }) => {
    return (

        <button onClick={onCreate} className="btn btn-dark Btn">
            <div className="sign">+ </div>
            <div className="text"> Create User </div>
        </button>
    );
}

export default ButtonCreateUser;