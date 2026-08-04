/*
KossarSherzad Encyclopedia Script
*/


// Smooth scrolling

document.querySelectorAll('nav a').forEach(link => {


    link.addEventListener('click', function(e){


        e.preventDefault();


        const target = document.querySelector(
            this.getAttribute('href')
        );


        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});




// Update footer year automatically

const footer = document.querySelector("footer");


if(footer){


    const year = new Date().getFullYear();


    footer.innerHTML += 
    `<p>Last updated: ${year}</p>`;


}




// Image loading effect

const profileImage = document.querySelector(".infobox img");


if(profileImage){


    profileImage.style.opacity = "0";


    profileImage.onload = function(){


        profileImage.style.transition =
        "opacity 0.8s";


        profileImage.style.opacity = "1";


    };


}
