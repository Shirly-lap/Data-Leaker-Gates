export interface IPost {
    title: string,
    body: string,
    creationDate: Date,
    creator: string,
    estimatedPublicationDate: Date,
    status: string,
    approvalPercentage: number,
    corrections: string,
    platform: string,
    postUrl: string,
    multimediaUrl: string
}

export enum Corrections {
    Holi = "holi",
    Ninguna = "Ninguna",
    PalabraProhibida = "palabra prohibida",
}

export enum Platform {
    Facebook = "Facebook",
    Instagram = "Instagram",
    X = "X",
}

export enum Status {
    Pending = "pending",
}
