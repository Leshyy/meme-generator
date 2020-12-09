'use strict';

const gImgs = [
    { id: 1, url: 'imgs/1.jpg', keywords: ['mad'] },
    { id: 2, url: 'imgs/2.jpg', keywords: ['happy'] },
    { id: 3, url: 'imgs/3.jpg', keywords: ['happy'] },
    { id: 4, url: 'imgs/4.jpg', keywords: ['happy'] },
    { id: 5, url: 'imgs/5.jpg', keywords: ['happy'] },
    { id: 6, url: 'imgs/6.jpg', keywords: ['happy'] },
    { id: 7, url: 'imgs/7.jpg', keywords: ['happy'] },
    { id: 8, url: 'imgs/8.jpg', keywords: ['happy'] },
    { id: 9, url: 'imgs/9.jpg', keywords: ['happy'] },
    { id: 10, url: 'imgs/10.jpg', keywords: ['happy'] },
    { id: 11, url: 'imgs/11.jpg', keywords: ['happy'] },
    { id: 12, url: 'imgs/12.jpg', keywords: ['happy'] },
    { id: 13, url: 'imgs/13.jpg', keywords: ['happy'] },
    { id: 14, url: 'imgs/14.jpg', keywords: ['happy'] },
    { id: 15, url: 'imgs/15.jpg', keywords: ['happy'] },
    { id: 16, url: 'imgs/16.jpg', keywords: ['happy'] },
    { id: 17, url: 'imgs/17.jpg', keywords: ['happy'] },
    { id: 18, url: 'imgs/18.jpg', keywords: ['happy'] },
];

let gMeme = {
    selectedImg: gImgs[0],
    selectedLineIdx: 0,
    // array of the img txts
    lines: [
        {
            x: 250,
            y: 50,
            txt: 'TOP TEXT',
            fontSize: 40,
            align: 'center',
        },
        {
            x: 250,
            y: 470,
            txt: 'BOTTOM TEXT',
            fontSize: 40,
            align: 'center',
        },
    ],
};

function getImgs() {
    return gImgs;
}
function getMeme() {
    return gMeme;
}

function findImg(id) {
    const img = gImgs.find((img) => {
        return img.id === id;
    });
    return img;
}
// toggles the active line
function switchSelectedLine() {
    if (gMeme.selectedLineIdx === 0) {
        gMeme.selectedLineIdx++;
    } else gMeme.selectedLineIdx = 0;
}

function getImgURL() {
    return gMeme.selectedImg.url;
}
function getMemeText(idx) {
    return gMeme.lines[idx].txt;
}

function setMemeText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function setMemeImg(img) {
    gMeme.selectedImg = img;
}

function setMeme(id) {
    const imgSelected = findImg(id);
    setMemeImg(imgSelected);
}

function updateFontSize(fontSize) {
    gMeme.lines[gMeme.selectedLineIdx].fontSize += fontSize;
}
function updateTxtAlign(align) {
    gMeme.lines[gMeme.selectedLineIdx].align = align;
}
