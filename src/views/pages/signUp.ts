import Swal from "sweetalert2";
import { LoginController } from "../../controllers/login.controller";
import { IcreateUser } from "../../models/ILogin";
import "../pages/scss/style.scss"

export const SignUp = (): HTMLElement => {

    const main = document.createElement("main") as HTMLElement;
    main.className = "container";
    const section = document.createElement("section") as HTMLElement;
    section.className = "signUp";

    const h1 = document.createElement("h1") as HTMLHeadElement;
    h1.innerText = "Data Leaker";
    h1.className = "title"

    const form = document.createElement("form") as HTMLFormElement;
    form.className = "signUp-form";

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

    const containerConfirmPassword = document.createElement("div") as HTMLElement;
    containerConfirmPassword.className = "mb-3"

    const confirmPassword = document.createElement("input") as HTMLInputElement;
    confirmPassword.className = "form-control";
    confirmPassword.placeholder = "Confirmar contraseña";
    confirmPassword.type = "password";
    confirmPassword.required = true;

    containerConfirmPassword.append(confirmPassword)

    const containerbtn = document.createElement("div") as HTMLElement;
    containerbtn.className = "mt-3 text-center"

    const button = document.createElement("button") as HTMLButtonElement;
    button.innerText = "Crear cuenta";
    button.className = "btn btn-primary";
    button.type = "submit";

    containerbtn.append(button)

    container.append(containerEmail, containerPassword, confirmPassword, containerbtn)
    form.append(container)

    section.append(h1, form);
    main.append(section);

    form.addEventListener("submit", async (event: Event) => {
        event.preventDefault();

        if (passwordInput.value === confirmPassword.value) {
            const createUser: IcreateUser = {
                email: emailInput.value,
                password: passwordInput.value
            }
            const loginController = new LoginController("https://api-posts.codificando.xyz/");

            try {
                const responseCreateUser = await loginController.createUser("users/register", createUser);
                console.log(responseCreateUser);
                window.location.href = "";
            } catch (e) {
                form.reset();
                console.log(e);
            }
        } else {
            Swal.fire({
                title: 'Error!',
                text: "Las contraseñas no son iguales",
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            form.reset();
        }
    })

    return main
}