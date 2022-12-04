//Created a load eventlistener to ensure images on canvas load before the game starts
window.addEventListener('load', function(){
    const canvas = document.getElementById('game-canvas');
    const context = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    // Game class is how the game will function all information will run through it
    class game {
        constructor(width, height){
            this.width = width;
            this.height = height;
        }
        //Update will update all 
        update()
    }

    class Player {

    }

    class Background {

    }


    class Enemy {

    }

    class EnemyHandler {

    }

    class displayStatText {

    }

    function animate() {

    }

})