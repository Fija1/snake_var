/// <reference path="level.ts" />
/// <reference path="gameobject.ts" />


/**
 * name
 */
class Block extends GameObject {

    constructor(l: Level) {
        super(l, "block"); 
    }
    
    public remove(){
        this.div.remove();
    }
}