export class PostController {
    url: string;

    constructor(url: string) {
        this.url = url
    }

    async getPost(endPoint: string){
        const request = await fetch(`${this.url}${endPoint}`);
        const response = await request.json()

        if(request.status != 200){
            throw new Error("No se puede mostrar los posts")

        }
        return response;
    }
}