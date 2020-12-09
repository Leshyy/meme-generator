'use strict';

let gCanvas;
let gCtx;

function onInit() {
    // hide meme editor page
    document.querySelector('.meme-editor').classList.add('none');

    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    renderMeme();
    renderGallery();
}

function renderGallery() {
    let imgStrHTML = '';
    const imgs = getImgs();
    imgs.forEach((img) => {
        imgStrHTML += `<img onClick="onImgClick(${img.id})" src="${img.url}" />`;
    });
    document.querySelector('.gallery-grid').innerHTML = imgStrHTML;
}

function renderMeme() {
    const currMeme = getMeme();
    const url = getImgURL();
    const img = new Image();
    img.src = url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0);
        drawText(getMemeText(0), currMeme.lines[0].x, currMeme.lines[0].y);
        drawText(getMemeText(1), currMeme.lines[1].x, currMeme.lines[1].y);
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

function onTextChange(txt) {
    setMemeText(txt.toUpperCase());
    renderMeme();
}
function onSwitchLines() {
    document.querySelector('#meme-txt').value = '';
    switchSelectedLine();
}

function onImgClick(id) {
    setMeme(id);
    renderMeme();
    hideGallery();
    showEditMeme();
}

function hideGallery() {
    document.querySelector('.img-gallery').classList.add('none');
}
function showGallery() {
    document.querySelector('.img-gallery').classList.remove('none');
}
function showEditMeme() {
    document.querySelector('.meme-editor').classList.remove('none');
}
function hideEditMeme() {
    document.querySelector('.meme-editor').classList.add('none');
}
