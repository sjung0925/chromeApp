const h1 = document.querySelector(".title h1");

function handleTitleClick() {
    // js에서 css 건드리기 <- 비추
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);