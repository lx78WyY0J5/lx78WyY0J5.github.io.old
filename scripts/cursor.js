document.addEventListener("mousemove", (event) => {
    let mousex = event.clientX - 15;
    let mousey = event.clientY - 10;
    let elem = document.getElementById("cursor");
    elem.style.left = mousex + 'px';
    elem.style.top = mousey + 'px';
});

const cursoreffect = document.querySelector("cursor");
let anchors = document.getElementsByClassName("text-link");

console.log(anchors);
for (item of anchors) {
    console.log(item);
    item.addEventListener("mouseenter", linkEnterHandler);
    item.addEventListener("mouseleave", linkLeaveHandler);
}

function linkEnterHandler() {
    cursor.classList.add("hover");
}

function linkLeaveHandler() {
    cursor.classList.remove("hover");
}

window.addEventListener("mousedown", () => {
    cursor.classList.add("click");
});

window.addEventListener("mouseup", () => {
    cursor.classList.remove("click");
});

