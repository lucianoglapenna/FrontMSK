import { useState } from "react"

import {login} from "../services/loginService"


const SignIn = ({handleSignIn}) => {
    const [wrongCred, setWrongCred] = useState(false);

    const handleOnClick = (e) => {
        e.preventDefault();

        const user = document.getElementById("inputUser").value;
        const pass = document.getElementById("inputPassword").value;

        login({user,pass}).then(data => {
            handleSignIn(data);
            setWrongCred(!data.signedIn);
        })
    }

    const handleCloseError = () => {
        setWrongCred(false);
    }

    return (
        <div 
            className="text-center py-5">
            <form className="form-signin">
                <img 
                    className="mb-4" 
                    src="favicon.ico"
                    style={{width:"72px", height:"72px"}}
                    alt="MSK Logo"/>
                <h1 className="h3 mb-3 font-weight-normal">Iniciar Sesión</h1>
                <label className="sr-only" htmlFor="inputEmail">Usuario</label>
                <input id="inputUser" className="form-control" type="email" placeholder="Correo Electrónico" required="" autoFocus=""/>
                <label className="sr-only" htmlFor="inputPassword">Contraseña</label>
                <input id="inputPassword" className="form-control" type="password" placeholder="Contraseña" required=""/>
                <div className="form-check my-3 d-flex justify-content-center">
                    <input className="form-check-input me-2" type="checkbox" value="" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Recordarme
                    </label>
                </div>
                { wrongCred &&
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        Credenciales incorrectas
                    <button 
                        type="button" 
                        className="btn-close" 
                        data-bs-dismiss="alert" 
                        aria-label="Close"
                        onClick={handleCloseError}>    
                    </button>
                  </div>}
                <button 
                    className="btn btn-lg btn-success btn-block" 
                    type="submit"
                    onClick={ (e) => handleOnClick(e) }>
                    Iniciar Sesión
                </button>
                <p className="mt-5 mb-3 text-muted">© 2020-2021</p>
            </form>
        </div>
    )
}

export default SignIn