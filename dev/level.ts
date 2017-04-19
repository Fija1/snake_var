/// <reference path="snake.ts" />

class Level {

    private scoreDiv: HTMLElement;
    private score: number = 0;
    private snake: Snake;
    private block: Block;
    private redBlocks: Array<RedBlock>;
    private timer: number;
    private message: string;
    public div: HTMLElement;

private gameObjects: Array<GameObject> = new Array<GameObject>();
 constructor() {
        this.div = document.createElement("level");
        document.body.appendChild(this.div);

        this.scoreDiv = document.createElement("score");
        this.div.appendChild(this.scoreDiv);

        this.block = new Block(this);
        this.gameObjects.push(this.block);
        this.snake = new Snake(this);
        this.timer = setInterval(this.createRedBlock.bind(this), 1000);
        this.redBlocks = new Array();
        this.message = "Score: " + this.score;
    }

    private createRedBlock() {
        this.redBlocks.push(new RedBlock(this));
    }

    public update() {
        if (this.snake.checkBlock(this.block)) {
            this.block.remove();
            this.block = new Block(this);
            this.score++;
            this.message = "Score: " + this.score;
        }

        for (let i = 0; i < this.redBlocks.length; i++) {
            if (this.snake.checkBlock(this.redBlocks[i])) {
                clearInterval(this.timer);
                this.snake.div.remove();
                this.message = "Game over!";
            }
        }
        
        this.snake.move();
        this.snake.draw();
        this.block.draw();

        for (let i = 0; i < this.redBlocks.length; i++) {
            console.log("In de for loop!");
            this.redBlocks[i].draw();
        }

        this.scoreDiv.innerHTML = this.message;
    }}