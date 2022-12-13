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
function toggleAvatarOut() {
    var a = document.getElementById("avatar-out");
    if (a.style.display === "none") {
        a.style.display = "inline-block";
    } else {
        a.style.display = "none";
    }
    document.getElementById("badge-card").style.display = "none";
    document.getElementById("github-card").style.display = "none";
    document.getElementById("techno-card").style.display = "none";
    document.getElementById("cv-card").style.display = "none";
    document.getElementById("jeux-card").style.display = "none";
    document.getElementById("unicorn-card").style.display = "none";
}

function toggleMainCard() {
    var a = document.getElementById("main-card");
    var b = document.getElementById("nav-card");
    toggleAvatarOut();
    if (a.style.display === "none") {
        a.style.display = "inline-block";
        b.style.display = "inline-block";
    } else {
        a.style.display = "none";
        b.style.display = "none";
    }
}

function toggleBadgeCard() {
    //toggleMainCard();
    var a = document.getElementById("badge-card");
    if (a.style.display === "none") {
        a.style.display = "inline-block";
    } else {
        a.style.display = "none";
    }
}

function toggleGithubCard() {
    //toggleMainCard();
    var a = document.getElementById("github-card");
    if (a.style.display === "none") {
        a.style.display = "inline-block";
    } else {
        a.style.display = "none";
    }
}

function toggleBadgeGithubCard() {
    toggleBadgeCard();
    toggleGithubCard();
}

function toggleTechnoCard() {
    toggleMainCard();
    var a = document.getElementById("techno-card");
    if (a.style.display === "none") {
        a.style.display = "inline-block";
    } else {
        a.style.display = "none";
    }
}

function toggleCVCard() {
    toggleMainCard();
    var a = document.getElementById("cv-card");
    if (a.style.display === "none") {
        a.style.display = "inline-block";
    } else {
        a.style.display = "none";
    }
}

function toggleJeuxCard() {
    toggleMainCard();
    var a = document.getElementById("jeux-card");
    if (a.style.display === "none") {
        a.style.display = "inline-block";
    } else {
        a.style.display = "none";
    }
}

function toggleUnicornCard() {
    toggleMainCard();
    var a = document.getElementById("unicorn-card");
    if (a.style.display === "none") {
        a.style.display = "inline-block";
    } else {
        a.style.display = "none";
    }
}