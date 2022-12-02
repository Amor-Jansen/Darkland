//Canvas information
const canvas = document.getElementById('can2');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.width = 700;
let gameSpeed = 5;

//Background Layers for parallax (for the background to move at a different speed to the character)
const backgroundLayer1 = new Image();
backgroundLayer1.src = './assets/images/1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = './images/2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = './images/3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = './images/4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = './images/5.png';
const backgroundLayer6 = new Image();
backgroundLayer6.src = './images/6.png';
const backgroundLayer7 = new Image();
backgroundLayer7.src = './images/7.png';

//Animation of the background
function animate(){
    ctx.drawImage(backgroundLayer1, 0, 0);
    requestAnimationFrame(animate);
};
animate();