function toggleButtons() {
    var a = document.getElementsByClassName("button");
    for (const element of a) {
        if (element.style.display === "none") {
            element.style.display = "inline-block";
        } else {
            element.style.display = "none";
        }
    }
}

function toggleMainCard() {
    var a = document.getElementById("main-card");
    var b = document.getElementById("nav-card");

    if (a.style.display === "none") {
        a.style.display = "inline-block";
        b.style.display = "inline-block";
    } else {
        a.style.display = "none";
        b.style.display = "none";
    }
}

function toggleBadgeCard() {
    var a = document.getElementById("badge-card");
    if (a.style.display === "none") {
        a.style.display = "inline-block";
    } else {
        a.style.display = "none";
    }
}

function toggleGithubCard() {
    var a = document.getElementById("github-card");
    if (a.style.display === "none") {
        a.style.display = "inline-block";
    } else {
        a.style.display = "none";
    }
}

function toggleTechnoCard() {
    var a = document.getElementById("techno-card");
    if (a.style.display === "none") {
        a.style.display = "inline-block";
    } else {
        a.style.display = "none";
    }
}

function toggleCVCard() {
    var a = document.getElementById("cv-card");
    if (a.style.display === "none") {
        a.style.display = "inline-block";
    } else {
        a.style.display = "none";
    }
}

function toggleJeuxCard() {
    var a = document.getElementById("jeux-card");
    if (a.style.display === "none") {
        a.style.display = "inline-block";
    } else {
        a.style.display = "none";
    }
}

function toggleUnicornCard() {
    var a = document.getElementById("unicorn-card");
    if (a.style.display === "none") {
        a.style.display = "inline-block";
    } else {
        a.style.display = "none";
    }
}