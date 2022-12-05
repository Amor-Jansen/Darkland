//Canvas information
const canvas = document.getElementById('can2');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.width = 720;
let gameSpeed = 5;
let gameFrame = 0;

//Background Layers for parallax (for the background to move at a different speed to the character)
const backgroundLayer1 = new Image();
backgroundLayer1.src = 'assets/images/layer1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'assets/images/layer2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'assets/images/layer3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'assets/images/layer4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'assets/images/layer5.png';
const backgroundLayer6 = new Image();
backgroundLayer6.src = 'assets/images/layer6.png';
const backgroundLayer7 = new Image();
backgroundLayer7.src = 'assets/images/layer7.png';

window.addEventListener('load', function(){
    const slider = document.getElementById('slider');
    slider.value = gameSpeed;
    const showGameSpeed = document.getElementById('showGameSpeed');
    showGameSpeed.innerHTML = gameSpeed;
    slider.addEventListener('change', function(e){
        console.log(e);
        gameSpeed = e.target.value;
        showGameSpeed.innerHTML = e.target.value;
    });
    //Background layer information for callback and draw image
    class Layer {
        constructor(image, speedModifier){
            this.x = 0;
            this.y = 0;
            this.width = 1000;
            this.heght = 536;
            this.image = image;
            this.speedModifier = speedModifier;
            this.speed = gameSpeed * this.speedModifier;
        }
        update(){
            this.speed = gameSpeed * this.speedModifier;
            if (this.x <= -this.width){
                this.x = 0;
            }
            this.x = Math.floor(this.x - this.speed);
            //this.x = gameFrame * this.speed % this.width;
        }
        draw(){
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
        }
    };
    
    const layer1 = new Layer(backgroundLayer1, 0.2);
    const layer2 = new Layer(backgroundLayer2, 0.2);
    const layer3 = new Layer(backgroundLayer3, 0.4);
    const layer4 = new Layer(backgroundLayer4, 0.4);
    const layer5 = new Layer(backgroundLayer5, 0.6);
    const layer6 = new Layer(backgroundLayer6, 0.8);
    const layer7 = new Layer(backgroundLayer7, 1);
    
    const gameObjects = [layer1, layer2, layer3, layer4, layer5, layer6, layer7];
    
    //Animation loop for the background
    function animate(){
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        gameObjects.forEach(object => {
            object.update();
            object.draw();
        });
        gameFrame--;
        requestAnimationFrame(animate);
    };
    
});
animate();
