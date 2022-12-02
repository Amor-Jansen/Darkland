//Created a load eventlistener to ensure images on canvas load before the game starts
window.addEventListener('load', function(){
    const canvas = document.getElementById('game-canvas');
    const context = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 720;
})