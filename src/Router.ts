import { Home } from "./views/pages/home";
import { Login } from "./views/pages/login";
import { SignUp } from "./views/pages/signUp";


export const Router = async () => {
    let { hash } = location;

    const containerRoot = document.querySelector("#app") as HTMLElement;

    containerRoot.innerHTML = "";

    if (hash == "" || hash == "#/") {
        containerRoot.append(Login())
    }
    else if (hash == "#/signUp") {
        containerRoot.append(SignUp())

    }

    else if (hash === "#/home") {
        containerRoot.append(Home())
    }
}