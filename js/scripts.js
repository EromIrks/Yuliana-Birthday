const startButton = document.getElementById("startButton");

const bgMusic = document.getElementById("bgMusic");

const transitionMessage = document.getElementById("transitionMessage");

const introContent = document.getElementById("introContent");

const characterReveal = document.getElementById("characterReveal");

const constellation = document.getElementById("constellation");

const continueButton = document.getElementById("continueButton");

const ourStory = document.getElementById("ourStory");

const memoriesButton = document.getElementById("memoriesButton");

const memoriesContinue = document.getElementById("memoriesContinue");

const memories = document.getElementById("memories");

const letterButton = document.getElementById("letterButton");

const letter = document.getElementById("letter");

const thankYouButton = document.getElementById("thankYouButton");

const thankYou = document.getElementById("thankYou");


// =======================
// INTRO START
// =======================


if(startButton){

    startButton.addEventListener("click", () => {


        if(bgMusic){

            console.log(bgMusic);

            bgMusic.volume = 0.02;

            bgMusic.play();

        }


        introContent.classList.add("fade-out");


        setTimeout(() => {


            introContent.style.display = "none";


            transitionMessage.classList.remove("hidden");


            setTimeout(() => {

                document.querySelector(".intro-line")
                .classList.add("show-text");

            },300);



            setTimeout(() => {

                document.querySelector(".name-reveal")
                .classList.add("show-text");

            },1500);



            setTimeout(() => {

                document.querySelector(".star-reveal")
                .classList.add("show-text");

            },2600);



            setTimeout(() => {


                transitionMessage.classList.add("hidden");


                characterReveal.classList.remove("hidden");

                characterReveal.classList.add("show");


            },4000);



        },3000);


    });

}



// =======================
// CHARACTER -> CONSTELLATION
// =======================


if(continueButton){


continueButton.addEventListener("click",()=>{


    characterReveal.classList.add("fade-out");


    setTimeout(()=>{


        characterReveal.style.display="none";


        constellation.classList.remove("hidden");

        constellation.classList.add("show");

        constellation.classList.add("constellation-active");


    },1000);


});


}



// =======================
// CONSTELLATION
// =======================


const constellationStars = document.querySelectorAll(".star");

const constellationEntries = document.querySelectorAll(".constellation-entry");


console.log("ETOILES TROUVEES :", constellationStars.length);



// Reset étoiles


constellationStars.forEach((star)=>{


    star.classList.remove("available");

    star.classList.remove("active");


});



// Reset descriptions


constellationEntries.forEach((entry)=>{


    entry.classList.remove("unlocked");


});



// Première étoile disponible


if(constellationStars.length > 0){


setTimeout(()=>{


    constellationStars[0].classList.add("available");


},800);


}




// Clic étoiles


constellationStars.forEach((star,index)=>{


star.addEventListener("click",()=>{


    console.log("ETOILE CLIQUEE :", index + 1);



    if(!star.classList.contains("available")){

        return;

    }



    star.classList.add("active");



    const hint = document.querySelector(".constellation-hint");


    if(hint){

        hint.style.opacity="0";

    }



    const entry = document.querySelector(
        `.constellation-entry[data-const="${index + 1}"]`
    );



    if(entry){

        entry.classList.add("unlocked");

    }




    const nextStar = constellationStars[index + 1];



    if(nextStar){


        setTimeout(()=>{


            nextStar.classList.add("available");


        },1000);


    }



    // Dernière étoile


    if(index === constellationStars.length - 1){


        setTimeout(()=>{


            if(memoriesButton){

                memoriesButton.classList.add("show");

            }


        },1200);


    }



});


});





// =======================
// CONSTELLATION -> OUR STORY
// =======================


if(memoriesButton){


memoriesButton.addEventListener("click",()=>{


    constellation.classList.add("fade-out");



    setTimeout(()=>{


        constellation.style.display="none";



        if(ourStory){


            ourStory.classList.remove("hidden");

            ourStory.classList.add("show");


            setTimeout(()=>{


                const characters = document.querySelector(".story-characters");


                if(characters){

                    characters.classList.add("reveal");

                }


            },2000);


        }


    },1000);



});


}






// =======================
// OUR STORY -> MEMORIES
// =======================


if(memoriesContinue){


memoriesContinue.addEventListener("click",()=>{


    ourStory.classList.add("fade-out");



    setTimeout(()=>{


        ourStory.style.display="none";



        if(memories){


            memories.classList.remove("hidden");

            memories.classList.add("show");


        }



    },1000);



});


}

// =======================
// MEMORIES -> LETTER
// =======================


if(letterButton){


letterButton.addEventListener("click",()=>{


    memories.classList.add("fade-out");


    setTimeout(()=>{


        memories.style.display="none";


        letter.classList.remove("hidden");

        letter.classList.add("show");


    },1000);


});


}

// =======================
// LETTER -> THANK YOU
// =======================


if(thankYouButton){


    thankYouButton.addEventListener("click",()=>{


        letter.classList.add("fade-out");


        setTimeout(()=>{


            letter.style.display="none";


            thankYou.classList.remove("hidden");

            thankYou.classList.add("show");


        },1000);


    });


}
