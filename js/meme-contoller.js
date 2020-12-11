'use strict';

let gCanvas;
let gCtx;
let gIsDown = false;
let currMeme;
let lastClickPos;
let renderRect = true;

function onInit() {
    // hide meme editor page
    document.querySelector('.meme-editor').classList.add('none');
    document.querySelector('#meme-txt').value =
        gMeme.lines[gMeme.selectedLineIdx].txt;

    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    currMeme = getMeme();

    if (window.innerWidth < 980) {
        gCanvas.width = 350;
        gCanvas.height = 350;
    }
    setTextPos(gCanvas.width, gCanvas.height);

    renderMeme();
    renderGallery();
}

function setTextPos(canvasWidth, canvasHeight) {
    currMeme.lines[0].x = canvasWidth / 2;
    currMeme.lines[0].y = 10;
    currMeme.lines[1].x = canvasWidth / 2;
    currMeme.lines[1].y = canvasHeight - currMeme.lines[1].fontSize;
}

function renderGallery() {
    let imgStrHTML = '';
    let imgs = getFilteredGallery();
    imgs.forEach((img) => {
        imgStrHTML += `<img onClick="onImgClick(${img.id})" src="${img.url}" />`;
    });
    document.querySelector('.gallery-grid').innerHTML = imgStrHTML;
}

function renderMeme() {
    const url = getImgURL();
    const img = new Image();
    img.src = url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
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
        drawRect(
            currMeme.lines[currMeme.selectedLineIdx].y,
            currMeme.lines[currMeme.selectedLineIdx].fontSize
        );
    };
}

function drawText(text, x, y, fontSize, align) {
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.textBaseline = 'top';
    gCtx.font = `${fontSize}px Impact`;
    gCtx.textAlign = align;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function drawRect(y, fontSize) {
    if (!renderRect) return;
    gCtx.beginPath();
    gCtx.strokeStyle = 'black';
    gCtx.rect(5, y, gCanvas.width - 10, fontSize);
    gCtx.stroke();
}

function onTextChange(txt) {
    setMemeText(txt.toUpperCase());
    renderMeme();
}
function onSwitchLines() {
    document.querySelector('#meme-txt').value =
        gMeme.lines[gMeme.selectedLineIdx].txt;
    switchSelectedLine();
    renderMeme();
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
function onGotoGallery() {
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
function onCanvasMouseDown(ev) {
    console.log(ev.offsetY);
    gIsDown = true;
    lastClickPos = ev.offsetY;
    // click top txt
    if (
        ev.offsetY >= currMeme.lines[0].y &&
        ev.offsetY <= currMeme.lines[0].y + currMeme.lines[0].fontSize
    ) {
        renderRect = true;
        renderMeme();
        if (currMeme.selectedLineIdx === 0) return;
        updateSelectedLine(0);
    } else if (
        // click bot txt
        ev.offsetY >= currMeme.lines[1].y &&
        ev.offsetY <= currMeme.lines[1].y + currMeme.lines[1].fontSize
    ) {
        renderRect = true;
        renderMeme();
        if (currMeme.selectedLineIdx === 1) return;
        updateSelectedLine(1);
    } else {
        renderRect = false;
    }
    document.querySelector('#meme-txt').value =
        gMeme.lines[gMeme.selectedLineIdx].txt;
    renderMeme();
}
function onCanvasMouseUp() {
    gIsDown = false;
    lastClickPos = null;
}
function onCanvasMouseMove(ev) {
    if (gIsDown) {
        if (
            lastClickPos >= currMeme.lines[0].y &&
            lastClickPos <= currMeme.lines[0].y + currMeme.lines[0].fontSize
        ) {
            currMeme.lines[0].y = ev.offsetY - 5;
        } else if (
            lastClickPos >= currMeme.lines[1].y &&
            lastClickPos <= currMeme.lines[1].y + currMeme.lines[1].fontSize
        ) {
            currMeme.lines[1].y = ev.offsetY - 5;
        }
        lastClickPos = ev.offsetY;
        renderMeme();
    }
}

function downloadImg(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpeg');
    elLink.href = imgContent;
}

function onSearch(txt) {
    setFilert(txt);
    renderGallery();
}
