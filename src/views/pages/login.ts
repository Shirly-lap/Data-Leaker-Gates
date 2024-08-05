import { LoginController } from "../../controllers/login.controller";
import { IcreateUser } from "../../models/ILogin";
import "../pages/scss/style.scss"

const url = "https://api-posts.codificando.xyz"
export const Login = (): HTMLElement => {

    const main = document.createElement("main") as HTMLElement;
    main.className = "login-main";
    main.id = "login"
    const section = document.createElement("section") as HTMLElement;
    section.className = "login-section";

    const h1 = document.createElement("h1") as HTMLHeadElement;
    h1.innerText = "Data Leaker";
    h1.className = "login-title"

    const form = document.createElement("form") as HTMLFormElement;
    form.className = "login-form";

    const container = document.createElement("div") as HTMLElement;
    container.className = "container"

    const containerEmail = document.createElement("div") as HTMLElement;
    containerEmail.className = "mb-3"

    const emailInput = document.createElement("input") as HTMLInputElement;
    emailInput.type = "email";
    emailInput.className = "form-control";
    emailInput.placeholder = "Correo electronico";
    emailInput.required = true;

    containerEmail.append(emailInput)

    const containerPassword = document.createElement("div") as HTMLElement;
    containerPassword.className = "mb-3"

    const passwordInput = document.createElement("input") as HTMLInputElement;
    passwordInput.className = "form-control";
    passwordInput.placeholder = "Contraseña";
    passwordInput.type = "password";
    passwordInput.required = true;

    containerPassword.append(passwordInput)

    const containerbtn = document.createElement("div") as HTMLElement;
    containerbtn.className = "mt-3 text-center"

    const button = document.createElement("button") as HTMLButtonElement;
    button.innerText = "Iniciar sesión";
    button.className = "btn btn-primary";
    button.type = "submit";

    containerbtn.append(button)

    container.append(containerEmail, containerPassword, containerbtn)
    form.append(container)

    const a = document.createElement("a") as HTMLAnchorElement;
    a.innerText = "Crear una cuenta";
    a.href = "#/signUp";
    a.className = "signUp-a"

    section.append(h1, form, a);
    main.append(section);


    form.addEventListener("submit", async (event) =>{
        event.preventDefault();

        const user: IcreateUser = {
            email : emailInput.value,
            password: passwordInput.value
        }

        const loginController = new LoginController(url)

        try {
            const responseLogin = await loginController.Login(user, "/auth/login" )
            alert(responseLogin.message)
            sessionStorage.setItem("user", user.email);

            window.location.hash = "#/home";
        } catch (error) {
            console.log(error);
            form.reset()
            
        }

    })

    return main;
} 