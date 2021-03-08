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