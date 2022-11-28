const canvas = document.getElementById('can1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'assets/images/player.png'
const spriteWidth = 100;
const spriteHeight = 91;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrame = 4;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'standing',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    }
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: {},
    }

});

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrame) % 6;
    frameX = spriteWidth * position;
    ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    gameFrame++;
    requestAnimationFrame(animate);

};
animate()