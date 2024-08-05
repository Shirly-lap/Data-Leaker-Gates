import { PostController } from "../../controllers/post.controller";
import { IPost } from "../../models/IPost";
import { createCard } from "./card";

export const Home = async () => {


    const main = document.createElement("main") as HTMLElement;
    main.className = "home-main";

    // SPINER

    const titulo = document.createElement("h1") as HTMLHeadElement;
    titulo.className = "lead";
    titulo.innerText = "Posts";

    const cardsContainer = document.createElement("section") as HTMLElement;
    cardsContainer.className = "cardsContainer-home";

    main.append(titulo, cardsContainer)

    const url = "https://api-posts.codificando.xyz"

    async function showPosts() {
        const postsController = new PostController(url)
        const dataPost = await postsController.getPost("/posts")

        dataPost.forEach(post =>{
            const card = createCard(post)
            cardsContainer.appendChild(card)
        })

    }

    showPosts()


}