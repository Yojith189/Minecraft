var canvas= new fabric.Canvas('myPreciousCanvas');


Player_X=10;
Player_Y= 10;
  
BlockWidth= 30;
BlockHeight= 30;

Player_Object="";
Block_Object="";

function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        Player_Object= Img;
        Player_Object.scaleToWidth(143);
        Player_Object.scaleToHeight(143);
        Player_Object.set({
            top:Player_Y,left:Player_X
        });
        canvas.add(Player_Object);

    });
}


function blockUpdate(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        Block_Object= Img;
        Block_Object.scaleToWidth(BlockWidth);
        Block_Object.scaleToHeight(BlockHeight);
        Block_Object.set({
            top:Player_Y,left:Player_X
        });
        canvas.add(Block_Object);

    });
}

