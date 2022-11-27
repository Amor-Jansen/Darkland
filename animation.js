const canvas = document.getElementById('can1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'assets/images/Walk-rat.png'
const spriteWidth = 32;
const spriteHeight = 32;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
   // ctx.fillRect(50,50,100,100);
    ctx.drawImage(playerImage, 0, 0, spriteWidth, spriteHeight, CANVAS_WIDTH, CANVAS_HEIGHT);
    requestAnimationFrame(animate);
};
animate();