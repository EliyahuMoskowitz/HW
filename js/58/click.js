(function () {
    'use strict';

    const cl = document.getElementById('click');
    cl.style.color = 'blue';
    cl.style.backgroundColor = 'red';
    cl.style.padding = '1em';
    cl.style.position = 'fixed';
    cl.style.left = '5px';

    let idRight, idLeft;
    cl.addEventListener('click', () => {
        if (!idRight) {
            idRight = setInterval(moveRight, 60);
            cl.innerHTML = 'to the Right!';
            cl.style.color = 'white';
            cl.style.backgroundColor = 'blue';
            cl.style.top = `${Math.random() * 350}px`;
            cl.style.padding = '4em';
            clearInterval(idLeft);
        } else {
            clearInterval(idRight);
            idLeft = setInterval(moveLeft, 75);
            idRight = null;
            cl.style.color = 'red';
            cl.style.backgroundColor = 'yellow';
            cl.style.top = `${(Math.random() * 350) + 1}px`;
            cl.style.padding = '2em';
            cl.innerHTML = 'to the Left!';
        }
    });

    function moveRight() {
        cl.style.left = `${parseInt(cl.style.left) + 5}px`;
    }
    function moveLeft() {
        cl.style.left = `${parseInt(cl.style.left) - 4}px`;
    }
}());