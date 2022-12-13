document.addEventListener("mousemove", (event) => {
    let mousex = event.clientX - 15;
    let mousey = event.clientY - 10;
    let elem = document.getElementById("cursor");
    elem.style.left = mousex + 'px';
    elem.style.top = mousey + 'px';
});

const cursoreffect = document.querySelector("cursor");
let anchors = document.getElementsByClassName("card");
console.log(anchors);
for (const item of anchors) {
    console.log("test");
    item.addEventListener("mouseenter", linkEnterHandler);
    item.addEventListener("mouseleave", linkLeaveHandler);
}

document.addEventListener("mousedown", () => {
    cursor.classList.add("click");
});

document.addEventListener("mouseup", () => {
    cursor.classList.remove("click");
});

function linkEnterHandler() {
    console.log("test");
    cursor.classList.add("hover");
}

function linkLeaveHandler() {
    cursor.classList.remove("hover");
}  