const key = {
    'map': keys
}

document.body.addEventListener('keydown', function (e) {
    switch (e.key) {
        case key.map[0]:
            document.getElementsByClassName('hit-button-green')[0].classList.add('hit');
            break;
        case key.map[1]:
            document.getElementsByClassName('hit-button-red')[0].classList.add('hit');
            break;
        case key.map[2]:
            document.getElementsByClassName('hit-button-yellow')[0].classList.add('hit');
            break;
        case key.map[3]:
            document.getElementsByClassName('hit-button-blue')[0].classList.add('hit');
            break;
        case key.map[4]:
            document.getElementsByClassName('hit-button-orange')[0].classList.add('hit');
            break;

    }
})

document.body.addEventListener('keyup', function (e) {
    switch (e.key) {
        case key.map[0]:
            document.getElementsByClassName('hit-button-green')[0].classList.remove('hit');
            break;
        case key.map[1]:
            document.getElementsByClassName('hit-button-red')[0].classList.remove('hit');
            break;
        case key.map[2]:
            document.getElementsByClassName('hit-button-yellow')[0].classList.remove('hit');
            break;
        case key.map[3]:
            document.getElementsByClassName('hit-button-blue')[0].classList.remove('hit');
            break;
        case key.map[4]:
            document.getElementsByClassName('hit-button-orange')[0].classList.remove('hit');
            break;

    }
})