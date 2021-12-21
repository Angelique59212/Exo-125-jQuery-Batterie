document.addEventListener("keypress", function (e) {
    switch (e.key) {
        case "a" :
            let clap = $('#clap')[0].play();
            clap.addClass("playing");
            setTimeout(() => $('.clap').removeClass("playing"), 500);
            break;
    }
})