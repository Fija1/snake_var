/**
 * name
 */
class GameObject {
    protected level: Level;
    public div:HTMLElement;
    public posX: number;
    public posY: number;

    constructor(l: Level, tagName:string) {

        this.level = l;
        this.div = document.createElement(tagName);
        this.level.div.appendChild(this.div);

        this.posX = Math.random() * (window.innerWidth-20);
        this.posY = Math.random() * (window.innerHeight-20);
    
        
    }

    public draw(){
this.div.style.transform = "translate( " + this.posX + "px, " + this.posY + "px)";    }
}