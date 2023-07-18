import { Player } from "./clases/Player.js";

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 200;
canvas.style = "background-color: black"

const canvasContainer = document.getElementById('gameCanvas');
canvasContainer.appendChild(canvas);


const player1 = new Player(canvas.width/2, canvas.height/2, 30, 30)

class ball {
    x = canvas.width / 2
    y = canvas.height / 2
    height = 40
    width = 40
    dirX = 1
    dirY = 1
    speed = 3
    color = "white"

    colors = ["blue","red","white","yellow"]
    
    constructor(){
        if (Math.random() <= .5)
            this.dirX = -1 
        else
            this.dirX = 1 
        
        if (Math.random() <= .5)
            this.dirY = -1 
        else
            this.dirY = 1 

        this.color = this.colors[ Math.floor(Math.random() * 4)]
        this.y = Math.floor(Math.random() * canvas.height)
            

        
    }

    draw(){
        ctx.fillStyle = this.color;
        console.log(this.color)
        ctx.fillRect(this.x, this.y, this.height, this.width);
    }

    update(){
        if ( this.x >= canvas.width-this.width || this.x <= 0)
            this.dirX *= -1
            this.speed+=.001
      
        if (this.y >= canvas.height-this.height || this.y <= 0)
            this.dirY *= -1
            // this.speed+=.001    
        

        // console.log(this.x, this.y, this.speedX, this.speedY, canvas.height)

        this.x += this.dirX * this.speed
        // this.y += this.dirY * this.speed
    }
}


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player1.draw(ctx)

    
    requestAnimationFrame(animate); 
}


animate()