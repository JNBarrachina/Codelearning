import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserRegisterForm = () => {
    
    const navigate = useNavigate();

    const registerUser = () => {
        const username = document.getElementById("usernameInput").value;
        const password = document.getElementById("passwordInput").value;
        const email = document.getElementById("emailInput").value;

        const userData = {
            username: username,
            password: password,
            email: email
        }

        localStorage.setItem("user", JSON.stringify(userData));

        setTimeout(() => {
            navigate("/count");
        }, 1000);
    }

    return (
        <form action="" className="registerForm">
            <input id = "usernameInput" type="text" placeholder="Nombre de usuario" />
            <input id = "passwordInput" type="password" placeholder="Contraseña" />
            <input id = "emailInput" type="email" placeholder="Email" />
            <input type="submit" value="Registrarme" onClick={registerUser}/>
        </form>
    )
}
