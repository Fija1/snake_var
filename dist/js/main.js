var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameObject = (function () {
    function GameObject(l, tagName) {
        this.level = l;
        this.div = document.createElement(tagName);
        this.level.div.appendChild(this.div);
        this.posX = Math.random() * (window.innerWidth - 20);
        this.posY = Math.random() * (window.innerHeight - 20);
    }
    GameObject.prototype.draw = function () {
        this.div.style.transform = "translate( " + this.posX + "px, " + this.posY + "px)";
    };
    return GameObject;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(l) {
        _super.call(this, l, "snake");
        this.speedX = 0;
        this.speedY = 0;
        window.addEventListener("keydown", this.keydown.bind(this));
        window.addEventListener("keyup", this.keyup.bind(this));
    }
    Snake.prototype.keydown = function (event) {
        switch (event.keyCode) {
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
    };
    Snake.prototype.keyup = function (event) {
        switch (event.keyCode) {
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
    };
    Snake.prototype.move = function () {
        if (this.posX + this.speedX < 0) {
            this.posX = window.innerWidth;
        }
        else if (this.posX + this.speedX > window.innerWidth) {
            this.posX = 0;
        }
        else if (this.posY + this.speedY < 0) {
            this.posY = window.innerHeight;
        }
        else if (this.posY + this.speedY > window.innerHeight) {
            this.posY = 0;
        }
        else {
            this.posX += this.speedX;
            this.posY += this.speedY;
        }
    };
    Snake.prototype.checkBlock = function (b) {
        if (this.posX + 20 >= b.posX && this.posX <= b.posX + 20 && this.posY + 20 >= b.posY && this.posY <= b.posY + 20) {
            return true;
        }
        else {
            return false;
        }
    };
    return Snake;
}(GameObject));
var Level = (function () {
    function Level() {
        this.score = 0;
        this.div = document.createElement("level");
        document.body.appendChild(this.div);
        this.scoreDiv = document.createElement("score");
        this.div.appendChild(this.scoreDiv);
        this.block = new Block(this);
        this.snake = new Snake(this);
        this.timer = setInterval(this.createRedBlock.bind(this), 1000);
        this.redBlocks = new Array();
        this.message = "Score: " + this.score;
    }
    Level.prototype.createRedBlock = function () {
        this.redBlocks.push(new RedBlock(this));
    };
    Level.prototype.update = function () {
        if (this.snake.checkBlock(this.block)) {
            this.block.remove();
            this.block = new Block(this);
            this.score++;
            this.message = "Score: " + this.score;
        }
        for (var i = 0; i < this.redBlocks.length; i++) {
            if (this.snake.checkBlock(this.redBlocks[i])) {
                clearInterval(this.timer);
                this.snake.div.remove();
                this.message = "Game over!";
            }
        }
        this.snake.move();
        this.snake.draw();
        this.block.draw();
        for (var i = 0; i < this.redBlocks.length; i++) {
            console.log("In de for loop!");
            this.redBlocks[i].draw();
        }
        this.scoreDiv.innerHTML = this.message;
    };
    return Level;
}());
var Block = (function (_super) {
    __extends(Block, _super);
    function Block(l) {
        _super.call(this, l, "block");
    }
    Block.prototype.remove = function () {
        this.div.remove();
    };
    return Block;
}(GameObject));
var Game = (function () {
    function Game() {
        this.level = new Level();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.gameLoop = function () {
        this.level.update();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var RedBlock = (function (_super) {
    __extends(RedBlock, _super);
    function RedBlock(l) {
        _super.call(this, l, "redBlock");
    }
    return RedBlock;
}(GameObject));
//# sourceMappingURL=main.js.map