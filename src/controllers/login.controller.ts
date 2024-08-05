import Swal from "sweetalert2"
import { IcreateUser, IresponseCreateUser, IresponseLogin } from "../models/ILogin"

export class LoginController {
    url: string;
    token: string | undefined;


    constructor(url: string) {
        this.url = url
    }

    // Metodo para crear un usuario
    async createUser(endPoint: string, newUser: IcreateUser): Promise<IresponseCreateUser> {
        const request = await fetch(`${this.url}${endPoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(newUser)
        })

        Swal.fire({
            title: "Usuario registrado exitosamente",
            icon: "success"
        });

        if (request.status === 404) {
            Swal.fire({
                title: 'Error!',
                text: "No se pudo registrar el usuario",
                icon: 'error',
                confirmButtonText: 'OK'
            })
            throw new Error("No se pudo crear usuario ");
        } else if (request.status === 400) {
            Swal.fire({
                title: 'Error!',
                text: "Contraseña o correo no valido",
                icon: 'error',
                confirmButtonText: 'OK'
            })
            throw new Error("email no valido o contraseña vacia");
        }
        else if(request.status === 500) {
            Swal.fire({
                title: 'Error!',
                text: "El usuario ya existe",
                icon: 'error',
                confirmButtonText: 'OK'
            })
            throw new Error("No se pudo crear usuario ya existe");
        }else{
            Swal.fire({
                title: "Usuario registrado exitosamente",
                icon: "success"
            });
        }

        const response = await request.json();
        return response
    }



    async Login(user: IcreateUser, endPoint: string) : Promise<IresponseLogin> {
        const request = await fetch(`${this.url}${endPoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(user)
        });

        const response = await request.json();
        this.token = response.token

        if (response.message!=="Login successful") {
            
            Swal.fire({
                title: 'Error!',
                text: "No se pudo iniciar sesion verifique su correo o contraseña de nuevo",
                icon: 'error',
                confirmButtonText: 'OK'
            })
            throw new Error("No se pudo iniciar sesion verifique su correo o contraseña de nuevo");

        }


        else{
            Swal.fire({
                title: "Bienvenido a Data Leaker ",
                icon: "success"
            });
        }
        
        return response;




    }
}