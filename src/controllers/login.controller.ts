import Swal from "sweetalert2"
import { IcreateUser, IresponseCreateUser } from "../models/ILogin"

export class LoginController {
    url: string

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

        // Validamos que si la respuesta es 200 oque 
        if (request.ok) {
            Swal.fire({
                title: "Usuario registrado exitosamente",
                icon: "success"
            });
        } else {

            Swal.fire({
                title: 'Error!',
                text: "No se pudo registrar el usuario",
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
        const response = await request.json();
        return response
    }
}