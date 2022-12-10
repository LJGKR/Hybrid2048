class BlockMap{
    constructor(row,column){
        this.Map = Array.from(Array(row), ()=> Array(column).fill(0));
        this.div_app = document.getElementById("app");
    }
    addblock(x,y,block){
        block.setactive(true);
        block.setcoord(x,y);
        this.Map[x][y] = block;
        this.div_app.appendChild(block.Element);
    }
    addrandomblock(block){
        block.setactive(true);
            var x = Math.floor((Math.random() * (10-6)));
            var y = Math.floor((Math.random() * (10-6)));
        blockmap.addblock(x,y,block);
        
        //랜덤 블록 위치 생성
        this.Map[x][y] = block;
    }
    removeblock(x,y){
        block.setactive(false);
        this.Map[x][y] = null;
    } 

}

class Block{
    constructor(value){
        this.Value = value;
        this.Active = false;
        this.XPos = 20;
        this.YPos = 20;
        this.Element = document.createElement("div");
        this.Element.setAttribute("class","movingblock");
        this.Element.append(this.Value);
    }
    changevalue(value){
        this.Value = value;
    }
    setactive(isActivated){
        this.Element.style.display = "block";
        this.Active = isActivated;        
    }
    setcoord(x,y){
        this.XPos += 150*x;
        this.YPos += 150*y;
        this.Element.style.left = this.XPos;
        this.Element.style.top = this.YPos;
        posx = this.XPos;
        posy = this.YPos;
    }
    removeblock(){
        this.Element.style.display = "none"
        this.Active = false;
        this.XPos = 20;
        this.YPos = 20;
    }
}
let blocks = document.getElementsByClassName("movingblock");
window.onkeydown = keylog;
var blockmap = new BlockMap(4,4);
var isMoved = false;
var posx = 0;
var posy = 0;
function keyArrowRight(){
    if(posx == 470){
        posx = 470;
        isMoved = false;
    }else{
        for (let i = 0; i < blocks.length; i++){
            posx += 150;
            blocks[i].style.left = posx;
            isMoved = true;
        }
    }
    //if(isMoved)
    //blockmap.addrandomblock(new Block(2));
    
}

function keyArrowLeft(){
    if(posx == 20){
        posx = 20;
        isMoved = false;
    }else{
        for (let i = 0; i < blocks.length; i++){
            posx -= 150;
            blocks[i].style.left = posx;
            isMoved = true;
        }
    }
    //if(isMoved)
    //blockmap.addrandomblock(new Block(2));
}
function keyArrowUp(){
    if(posy == 20){
        posy = 20;
        isMoved = false;
    }else{
        for (let i = 0; i < blocks.length; i++){
            posy -= 150;
            blocks[i].style.top = posy;
            isMoved = true;
        }
    }
    //if(isMoved)
    //blockmap.addrandomblock(new Block(2));
}
function keyArrowDown(){
    if(posy == 470){
        posy = 470;
        isMoved = false;
    }else{
        for (let i = 0; i < blocks.length; i++){
            posy += 150;
            blocks[i].style.top = posy;
            isMoved = true;
        }
    }
    //if(isMoved)
    //blockmap.addrandomblock(new Block(2));
}
Start();
function Start(){
    var rand1 = Math.floor((Math.random() * (10-7)));
    if(rand1 == 0){
    var randx = Math.floor((Math.random() * (10-6)));
    var randy = Math.floor((Math.random() * (10-6)));
    var randx1 = Math.floor((Math.random() * (10-6)));
    var randy1 = Math.floor((Math.random() * (10-6)));
    if(randx == randx1 && randy == randy1){
        var randx = Math.floor((Math.random() * (10-6)));
        var randy = Math.floor((Math.random() * (10-6)));
    }
    blockmap.addblock(randx,randy, new Block(2));
    blockmap.addblock(randx1,randy1, new Block(4));
    }
    else if(rand1 == 1){
        var randx = Math.floor((Math.random() * (10-6)));
        var randy = Math.floor((Math.random() * (10-6)));
        blockmap.addblock(randx,randy, new Block(2));
    }
    else if(rand1 == 2){
        var randx = Math.floor((Math.random() * (10-6)));
        var randy = Math.floor((Math.random() * (10-6)));
        blockmap.addblock(randx,randy, new Block(4));
    }
}

function keylog(e){
    console.log(e.key);
    switch(e.key){
        case 'ArrowRight':
            keyArrowRight();
            break;
        case 'ArrowLeft':
            keyArrowLeft();
            break;
        case 'ArrowUp':
            keyArrowUp();
            break;
        case 'ArrowDown':
            keyArrowDown();
            break;
        default:            
            break;
    }
}