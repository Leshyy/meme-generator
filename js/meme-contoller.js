'use strict';

let gCanvas;
let gCtx;

function onInit() {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    renderMeme();
}

function renderMeme() {
    const currMeme = getMeme();
    const url = currMeme.selectedImg.url;
    const img = new Image();
    img.src = url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0);
        drawText(
            currMeme.lines[0].txt,
            currMeme.lines[0].x,
            currMeme.lines[0].y
        );
        drawText(
            currMeme.lines[1].txt,
            currMeme.lines[1].x,
            currMeme.lines[1].y
        );
    };
}

function drawText(text, x, y) {
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.font = '40px Impact';
    gCtx.textAlign = 'center';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}
