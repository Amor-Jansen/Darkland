//Canvas information
const canvas = document.getElementById('can2');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.width = 720;
let gameSpeed = 5;

//Background Layers for parallax (for the background to move at a different speed to the character)
const backgroundLayer1 = new Image();
backgroundLayer1.src = 'assets/images/1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'assets/images/2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'assets/images/3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'assets/images/4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'assets/images/5.png';
const backgroundLayer6 = new Image();
backgroundLayer6.src = 'assets/images/6.png';
const backgroundLayer7 = new Image();
backgroundLayer7.src = 'assets/images/7.png';

let x = 0;
let xx = 1920;

//Animation loop for the background
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backgroundLayer2, x, 0);
    ctx.drawImage(backgroundLayer2, xx, 0);
    //seamless scrolling if/else
    if (x < -1920) x = 1920 - gameSpeed;
    else x -= gameSpeed;
    if (xx < -1920) xx = 1920 - gameSpeed;
    else xx -= gameSpeed;
    requestAnimationFrame(animate);
};
animate();