const griddisplay = document.querySelector('#grid');
const resultdisplay = document.querySelector("#score")

const cardArray = [
    {
        name:"lemon",
        img:"images/lemon.png"
    },{
        name:"watermelon",
        img:"images/watermelon.png"
    },{
        name:"orange",
        img:"images/orange.png"
    },{
        name:"pineapple",
        img:"images/pineapple.png"
    },{
        name:"grapes",
        img:"images/grapes.png"
    },{
        name:"tomato",
        img:"images/tomato.png"
    },
    {
        name:"lemon",
        img:"images/lemon.png"
    },{
        name:"watermelon",
        img:"images/watermelon.png"
    },{
        name:"orange",
        img:"images/orange.png"
    },{
        name:"pineapple",
        img:"images/pineapple.png"
    },{
        name:"tomato",
        img:"images/tomato.png"
    },{
        name:"grapes",
        img:"images/grapes.png"
    },
]

cardArray.sort(() => 0.5 - Math.random())

generateboard();

function generateboard(){
    for(let i=0; i<cardArray.length; i++)
    {
        const card = document.createElement('img');
        card.setAttribute('src','images/floralbg.webp');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipcard);
        griddisplay.appendChild(card);
        
    }
    console.log(cardArray);
}

card_chosen = [];
card_chosen_id = [];

function flipcard(){
    const card_id = this.getAttribute("data-id");
    this.setAttribute('src',cardArray[card_id].img);
    card_chosen_id.push(card_id);
    card_chosen.push(cardArray[card_id].name);

    if(card_chosen.length === 2)
    {
        setTimeout(checkmatch,500);
    }
    
}

cardsWon = []
function checkmatch(){
    const cards = document.querySelectorAll('img');

    if(card_chosen[0] == card_chosen[1])
    {
        cards[card_chosen_id[0]].removeEventListener('click',flipcard);
        cards[card_chosen_id[1]].removeEventListener('click',flipcard);
        cardsWon.push(card_chosen);
        resultdisplay.innerHTML = cardsWon.length;
    }
    else{
        cards[card_chosen_id[0]].setAttribute('src','images/floralbg.webp')
        cards[card_chosen_id[1]].setAttribute('src','images/floralbg.webp')
    }

    card_chosen = [];
    card_chosen_id = [];

    if(cardsWon.length == cardArray.length/2)
    {
        resultdisplay.innerHTML = "Congradulations.... You won the game"
    }

}