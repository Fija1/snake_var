/// <reference path="level.ts" />
/// <reference path="gameobject.ts" />


class Snake extends GameObject{
private speedX: number = 0;
private speedY: number = 0;


    constructor(l: Level) {
        super(l, "snake");

        window.addEventListener("keydown", this.keydown.bind(this));
        window.addEventListener("keyup", this.keyup.bind(this));
    }

    private keydown(event: KeyboardEvent){
        switch (event.keyCode){
            case 37: 
                this.speedX = -5;
                this.speedY = 0;
                break;

            case 38:
                this.speedX = 0;
                this.speedY = -5;
                break;

            case 39:
                this.speedX = 5;
                this.speedY = 0;
                break;

            case 40:
                this.speedX = 0;
                this.speedY = 5;
                break;
        }
    }

    private keyup(event: KeyboardEvent){ 
         switch (event.keyCode){
            case 37: 
                this.speedX = 0;
                this.speedY = 0;
                break;

            case 38:
                this.speedX = 0;
                this.speedY = 0;
                break;

            case 39:
                this.speedX = 0;
                this.speedY = 0;
                break;

            case 40:
                this.speedX = 0;
                this.speedY = 0;
                break;
        }
    }

    public move (){
        if(this.posX + this.speedX < 0){
            this.posX = window.innerWidth;
        } else if(this.posX + this.speedX > window.innerWidth){
            this.posX = 0;
        }else if(this.posY + this.speedY < 0){
            this.posY = window.innerHeight;
        } else if(this.posY + this.speedY > window.innerHeight){
            this.posY = 0;
        }else{
        this.posX += this.speedX;
        this.posY += this.speedY;
        }
    }

    public checkBlock(b: GameObject){
        if (this.posX + 20 >= b.posX && this.posX <= b.posX + 20 && this.posY + 20 >= b.posY && this.posY <= b.posY + 20)
         {
            return true;
        }
        else {
            return false;
        }

    }
}

// 