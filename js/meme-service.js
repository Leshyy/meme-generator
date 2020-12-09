'use strict';

const gImgs = [
    { id: 1, url: 'imgs/1.jpg', keywords: ['mad'] },
    { id: 2, url: 'imgs/2.jpg', keywords: ['happy'] },
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
            size: 20,
            align: 'center',
        },
        {
            x: 250,
            y: 470,
            txt: 'BOTTOM TEXT',
            size: 20,
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
