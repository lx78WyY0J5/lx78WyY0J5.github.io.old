include_all();

async function include_all() {
    await include("/pages/includes/head.html", "head", false);

    await include_css("/styles/card.css");
    await include_css("/styles/body.css");
    await include_css("/styles/text.css");
    await include_css("/styles/utils.css");
    await include_css("/styles/scrollbar.css");
    await include_css("/styles/cursor.css");
    await include_css("/styles/autoType.css");
    await include_css("/styles/avatar.css");
    await include_css("/styles/anchor.css");
    await include_css("/styles/gist.css");
    await include_css("/styles/style.css");

    // await include_css("/styles/header.css");
    await include("/pages/includes/header.html", "body", false);

    // await include_css("/styles/content.css");
    await include("/pages/includes/content.html", "body");

    await include_script("/scripts/cursor.js", "body", false);

    await custom_pages_include();
}

async function include(link, query, queryOrIndex) {
    let response = await fetch(link)
        .then(response => {
            return response.text()
        })
        .then(data => {
            if (queryOrIndex) {
                document.getElementById(query).innerHTML += data;
            } else {
                document.querySelector(query).innerHTML += data;
            }
        })
        .catch(error => {
            console.log(error);
        });
}

async function include_script(url) {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
}

async function include_css(url) {
    var head = document.getElementsByTagName('HEAD')[0];

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;

    head.appendChild(link);
}

async function include_md(url, query) {
    let response = await fetch(url)
        .then(response => {
            return response.text()
        })
        .then(data => {
            let MDText = parseMd(data);
            document.getElementById(query).innerHTML += MDText;
        })
        .catch(error => {
            console.log(error);
        });
}

async function custom_pages_include() {
    var pathname = window.location.pathname;
    if (pathname == "/") {
        pathname += "index.html";
    }

    await include("/pages/contents/card.html", "content", true);
    if (pathname === "/index.html") {
    }

    else if (pathname === "/pages/views/badges.html") {
        await include("/pages/contents/badges.html", "content", true);
    }

    else if (pathname === "/pages/views/giscus.html") {
        await include_script("/scripts/giscus.js", "content", true);
    }

    else if (pathname === "/pages/views/techno.html") {
        await include("/pages/contents/techno.html", "content", true);
        await include("/pages/contents/cv.html", "content", true);
    }

    else if (pathname === "/pages/views/jeux.html") {
        await include("/pages/contents/jeux.html", "content", true);
    }

    else if (pathname === "/pages/views/unicorn.html") {
    }

    else if (pathname === "/404.html") {
        await include("/pages/contents/404.html", "content", true);
    } else {
        await include("/pages/contents/404.html", "content", true);
    }
}
