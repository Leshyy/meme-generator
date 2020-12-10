'use strict';

let gFilter;

const gImgs = [
    { id: 1, url: 'imgs/1.jpg', keywords: ['mad', 'trump'] },
    { id: 2, url: 'imgs/2.jpg', keywords: ['dog', 'cute'] },
    { id: 3, url: 'imgs/3.jpg', keywords: ['cute', 'baby', 'dog'] },
    { id: 4, url: 'imgs/4.jpg', keywords: ['cat', 'sleep'] },
    { id: 5, url: 'imgs/5.jpg', keywords: ['baby', 'success'] },
    { id: 6, url: 'imgs/6.jpg', keywords: ['explain', 'man'] },
    { id: 7, url: 'imgs/7.jpg', keywords: ['baby', 'surprise'] },
    { id: 8, url: 'imgs/8.jpg', keywords: ['man', 'listen'] },
    { id: 9, url: 'imgs/9.jpg', keywords: ['baby', 'evil'] },
    { id: 10, url: 'imgs/10.jpg', keywords: ['laugh', 'man'] },
    { id: 11, url: 'imgs/11.jpg', keywords: ['kiss', 'man'] },
    { id: 12, url: 'imgs/12.jpg', keywords: ['what', 'you'] },
    { id: 13, url: 'imgs/13.jpg', keywords: ['leo', 'man'] },
    { id: 14, url: 'imgs/14.jpg', keywords: ['man', 'what'] },
    { id: 15, url: 'imgs/15.jpg', keywords: ['ned', 'one'] },
    { id: 16, url: 'imgs/16.jpg', keywords: ['man', 'funny'] },
    { id: 17, url: 'imgs/17.jpg', keywords: ['putin', 'man'] },
    { id: 18, url: 'imgs/18.jpg', keywords: ['toy', 'look'] },
];

let gMeme = {
    selectedImg: gImgs[0],
    selectedLineIdx: 0,
    // array of the img txts
    lines: [
        {
            x: 250,
            y: 10,
            txt: 'TOP TEXT',
            fontSize: 40,
            align: 'center',
        },
        {
            x: 250,
            y: 450,
            txt: 'BOTTOM TEXT',
            fontSize: 40,
            align: 'center',
        },
    ],
};

function getFilteredGallery() {
    if (gFilter === '' || !gFilter) return gImgs;
    const filterdImgs = [];
    gImgs.forEach((img) => {
        img.keywords.forEach((keyword) => {
            if (keyword.includes(gFilter)) {
                filterdImgs.push(img);
            }
        });
    });
    return filterdImgs;
}
function setFilert(filter) {
    gFilter = filter;
}

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

function updateSelectedLine(idx) {
    gMeme.selectedLineIdx = idx;
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
