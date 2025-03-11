const h1 = document.querySelector(".title h1");

function handleTitleClick() { // toggle
    h1.classList.toggle("clicked");
}

function handleTitleClick_BETTER() { // classList
    const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}

function handleTitleClick_BUGS() {
    const clickedClass = "clicked"; // 반복되는 비교 문자열 대응
    // 만약에 클래스명이 두개 이상이라면?
    if (h1.className === clickedClass) {
        h1.className = ""; // 이 부분에서 clicked 외 유지해야하는 클래스명도 지워지는 버그 발생
    } else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);