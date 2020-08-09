(function () {
    'use strict';

    function getID(id) {
        return document.getElementById(id);
    }

    for (let i = 1; i <= 8; i++) {
        let section = getID(`section${i}`);
        let input = getID(`input${i}`);
        input.addEventListener('input', () => section.style.color = input.value);
    }

    const bg = getID('bg');
    bg.addEventListener('input', () => document.body.style.backgroundColor = bg.value);

}());