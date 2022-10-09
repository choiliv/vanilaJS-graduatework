const quotes = [
    {
        quote: "A whole new world. A dazzling place I never new.",
        author: "Jasmine"
    },
    {
    quote: "I wanna be where the people are. I wanna see, wanna see'em dancing.",
    author: "Ariel"
     },  
 
     {
        quote: "Then somebody bends unexpectedly.",
        author: "belle"
    },
   
    {
        quote: "If you keep on believing, The dream that you wish will come true.",
        author: "cinderella"
    },
    
    {
        quote: "I'm afraid of what I'm risking if I follow you, Into the unkonwn.",
        author: "Elsa"
    },

    {
        quote: "All my life has been a series of doors in my face and then suddenly I bump into you.",
        author: "Anna"
    },

    {
        quote: "When will my reflection show, Who i am inside?",
        author: "Mulan"
    },


    {
        quote: "And tomorrow night, The lights will appear.",
        author: "Rapunzel"
    },

    {
        quote: "I know you, I walked with you once upon a dream.",
        author: "Aurora"
    },


]

const body = document.querySelector("body");
const quoteForm = document.getElementById("quotes");
const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");



const images = ["aladdin.jpeg","ariel.jpg", "beautyandthebeast.jpeg","cinderella.webp","frozen1.jpeg","frozen2.jpeg","Mulan.jpeg","rapunzel.jpeg","sleepingbeauty.jpeg"];

function addImg() {
    const random = Math.floor(Math.random()*quotes.length)
    const todayQuote = quotes[random];
 
  quote.innerText = todayQuote.quote;
  author.innerText = todayQuote.author;

  const chosenImage = images[random];

  body.style.backgroundImage = `linear-gradient(to right,rgba(14, 32, 81, 1), rgba(14, 32, 81, 0.8),rgba(14, 32, 81, 0.5),rgba(14, 32, 81, 0.3), rgba(14, 32, 81, 0), rgba(0,0,0,0)),url(img/${chosenImage})`;
}


addImg();
setInterval(addImg, 5000);



