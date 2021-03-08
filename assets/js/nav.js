const navImages = document.getElementsByClassName("navImage");


document.addEventListener("mouseover", function(event) {
    let navImg;
    const width = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth;
    if (event.target.text && width >= 1200) {
        switch (event.target.text.replace("(current)", "")) {
            case "Home":
                navImg = navImages[0]
                break;
            case "Musical Productions & Scripts":
                navImg = navImages[1]
                break;
            case "Choreography":
                navImg = navImages[2]
                break;
            case "Teaching":
                navImg = navImages[3]
                break;
            case "Voiceovers":
                navImg = navImages[4]
                break;
            case "Classic Laura":
                navImg = navImages[5]
                break;

            default:
                break;
        }
        navImg.setAttribute("style", "display:block;")
    }
})

document.addEventListener("mouseout", function(event) {
    let navImg;
    if (event.target.text) {

        switch (event.target.text.replace("(current)", "")) {
            case "Home":
                navImg = navImages[0]
                break;
            case "Musical Productions & Scripts":
                navImg = navImages[1]
                break;
            case "Choreography":
                navImg = navImages[2]
                break;
            case "Teaching":
                navImg = navImages[3]
                break;
            case "Voiceovers":
                navImg = navImages[4]
                break;
            case "Classic Laura":
                navImg = navImages[5]
                break;

            default:
                break;
        }
        navImg.setAttribute("style", "display:none")
    }
})


console.log("Dancer icons in menu by artist orangereebok via vecteezy.com");

// hidden image opacity on scroll for teaching.html
window.addEventListener('scroll', () => {
    let scrollNum = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    scrollNum = scrollNum.toFixed(3);
    if (scrollNum < 0.6) {
        scrollNum = 0;
    } else if (scrollNum < 0.7) {
        scrollNum = 0.1;
    } else if (scrollNum < 0.75) {
        scrollNum = 0.2;
    } else if (scrollNum < 0.8) {
        scrollNum = 0.3;
    } else if (scrollNum < 0.84) {
        scrollNum = 0.4;
    } else if (scrollNum < 0.87) {
        scrollNum = 0.5;
    } else if (scrollNum < 0.9) {
        scrollNum = 0.6;
    } else if (scrollNum < 0.95) {
        scrollNum = 0.7;
    } else if (scrollNum < 1) {
        scrollNum = 0.8;
    } else {
        scrollNum = 1;
    }
    document.body.style.setProperty('--scroll', scrollNum);
}, false);


function contactLaura() {
    let connectMenu = document.getElementsByClassName("connectMenu")[0];
    if (connectMenu.classList.contains("close")) {
        connectMenu.classList.remove("close");
    } else {
        connectMenu.classList.add("close");
    }

}