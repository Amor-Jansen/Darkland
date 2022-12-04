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

//Background layer information for callback and draw image
class Layer {
    constructor(image, speedModifier){
        this.x = 0;
        this.y = 0;
        this.width = 1920;
        this.heght = 1080;
        this.xx = this.width;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update(){
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -this.width){
            this.x = this.width + this.xx - this.speed;
        }
        if (this.xx <= this.width){
            this.xx = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.xx = Math.floor(this.xx - this.speed);
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.xx, this.y, this.width, this.height);
    }
};

const layer1 = new Layer(backgroundLayer1, 0.5);
const layer2 = new Layer(backgroundLayer2, 0.5);
const layer3 = new Layer(backgroundLayer3, 0.5);
const layer4 = new Layer(backgroundLayer4, 0.5);
const layer5 = new Layer(backgroundLayer5, 0.5);
const layer6 = new Layer(backgroundLayer6, 0.5);
const layer7 = new Layer(backgroundLayer7, 1);

const gameObjects = [layer1, layer2, layer3, layer4, layer5, layer6, layer7];

//Animation loop for the background
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gameObjects.forEach(object => {
        object.update();
        object.draw();
    });
    requestAnimationFrame(animate);
};
animate();