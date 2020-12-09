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
        drawText(
            getMemeText(0),
            currMeme.lines[0].x,
            currMeme.lines[0].y,
            currMeme.lines[0].fontSize,
            currMeme.lines[0].align
        );
        drawText(
            getMemeText(1),
            currMeme.lines[1].x,
            currMeme.lines[1].y,
            currMeme.lines[1].fontSize,
            currMeme.lines[1].align
        );
    };
}

function drawText(text, x, y, fontSize, align) {
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.font = `${fontSize}px Impact`;
    gCtx.textAlign = align;
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
function onGotoGalley() {
    showGallery();
    hideEditMeme();
}

function onFontUpdate(diff) {
    updateFontSize(diff);
    renderMeme();
}
function onTxtAlign(align) {
    updateTxtAlign(align);
    renderMeme();
}
