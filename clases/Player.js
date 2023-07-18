export class Player {

    constructor(posX, posY, width, height){
        this.posX = posX
        this.posY = posY
        this.width = width
        this.height = height
        console.log("player creado")
    }

    draw(ctx){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.posX, this.posY, this.height, this.width);
        console.log("dibujando player")
    }

}