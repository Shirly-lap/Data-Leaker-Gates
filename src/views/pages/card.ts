import { IPost } from "../../models/IPost";

export const createCard = (post :IPost) :HTMLElement =>{
    let {title,body,creationDate,status,platform,postUrl} = post

    const cardContainer = document.createElement('div') as HTMLElement;
    cardContainer.className = "container"

    const card = document.createElement('div') as HTMLElement;
    card.className = "card text-center"

    const headerCard = document.createElement('div') as HTMLElement;
    headerCard.className = "card-header"
    headerCard.innerText =title

    const bodyCard = document.createElement('div') as HTMLElement;
    bodyCard.className = "card-body"

        const cardTitle = document.createElement("h5") as HTMLElement
        cardTitle.className = "card-title"
        cardTitle.innerText = status
        
        const cardText = document.createElement("h5") as HTMLElement
        cardText.className = "card-text"
        cardText.innerText = body, platform, postUrl

        const viewMore = document.createElement("a") as HTMLAnchorElement
        viewMore.className = "btn btn-primary"
        viewMore.innerText = "Ver más"

    bodyCard.append(cardTitle, cardText, viewMore)

    const cardFooter =  document.createElement('div') as HTMLElement;
    cardFooter.className = "card-footer text-muted"
    cardFooter.innerText = String(creationDate)





    return cardContainer;

}


