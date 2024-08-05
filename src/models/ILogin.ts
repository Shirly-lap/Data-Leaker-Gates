// Interfaces para la estructura de solicitudes y respuestas para la creacion de un usuario
export interface IcreateUser {
    email: string;
    password: string;
}

export interface IresponseCreateUser {
    email: string;
    password : string;
    id : number
}

export interface IresponseLogin {
    message : string
}