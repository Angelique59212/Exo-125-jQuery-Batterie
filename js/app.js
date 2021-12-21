$("body").on("keypress", function (e) {
    switch (e.key) {
        case "a" :
            let clap = $('#clap')[0].play();
            clap.addClass("playing");
            setTimeout(() => $('.clap').removeClass("playing"), 500);
            break;
        case "s" :
            let hihat = $('#hihat')[0].play();
            hihat.addClass("playing");
            setTimeout(() => $('.hihat').removeClass("playing"), 500);
            break;
        case "d" :
            let kick = $('#kick')[0].play();
            kick.addClass("playing");
            setTimeout(() => $('.kick').removeClass("playing"), 500);
            break;
        case "f" :
            let openhat = $('#openhat')[0].play();
            openhat.addClass("playing");
            setTimeout(() => $('.openhat').removeClass("playing"), 500);
            break;
        case "g" :
            let boom = $('#boom')[0].play();
            boom.addClass("playing");
            setTimeout(() => $('.boom').removeClass("playing"), 500);
            break;
        case "h" :
            let ride = $('#ride')[0].play();
            ride.addClass("playing");
            setTimeout(() => $('.ride').removeClass("playing"), 500);
            break;
        case "j" :
            let snare = $('#snare')[0].play();
            snare.addClass("playing");
            setTimeout(() => $('.snare').removeClass("playing"), 500);
            break;
        case "k" :
            let tom = $('#tom')[0].play();
            tom.addClass("playing");
            setTimeout(() => $('.tom').removeClass("playing"), 500);
            break;
        case "l" :
            let tink = $('#tink')[0].play();
            tink.addClass("playing");
            setTimeout(() => $('.tink').removeClass("playing"), 500);
            break;
    }
})