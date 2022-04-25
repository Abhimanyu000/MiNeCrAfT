canvas=new fabric.Canvas("myCanvas");

heightofblocksingeneral=30;
widthofblocksingeneral=30;

xofplayer=10;
yofplayer=10;

objectofplayersperson="";

function playersupdatedlocation(){
    fabric.Image.fromURL("player.png", function (Img){
        objectofplayersperson=Img;
        objectofplayersperson.scaleToWidth(150);
        objectofplayersperson.scaleToHeight(150);
        objectofplayersperson.set({
            top:yofplayer, 
            left:xofplayer
        });
        canvas.add(objectofplayersperson);
    })
};

function newimagegetsupdatedafterkeyispressed(get_image){
    fabric.Image.fromURL(get_image, function (Img){
        blockimage=Img;
        blockimage.scaleToHeight(heightofblocksingeneral);
        blockimage.scaleToWidth(widthofblocksingeneral);
        blockimage.set({
            top:yofplayer,
            left:xofplayer
        });
        canvas.add(blockimage);
    })
};

window.addEventListener("keydown", mykeydownpressedforminecraftprojectthatiscreatedinjavascript)

function mykeydownpressedforminecraftprojectthatiscreatedinjavascript(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if (e.shiftKey==true&&keypressed=="80")
    {
        console.log("SHIFT+P IS PRESSED");
        widthofblocksingeneral=widthofblocksingeneral+10;
        heightofblocksingeneral=heightofblocksingeneral+10;
        document.getElementById("widthdisplayforminecraftclass86").innerHTML=widthofblocksingeneral;
        document.getElementById("heightdisplayforminecraftclass86").innerHTML=heightofblocksingeneral;
    }

    if (e.shiftKey==true&&keypressed=="77")
    {
        console.log("SHIFT+M IS PRESSED");
        widthofblocksingeneral=widthofblocksingeneral-10;
        heightofblocksingeneral=heightofblocksingeneral-10;
        document.getElementById("widthdisplayforminecraftclass86").innerHTML=widthofblocksingeneral;
        document.getElementById("heightdisplayforminecraftclass86").innerHTML=heightofblocksingeneral;
    }

    if (keypressed=="38")
    {
        up();
        console.log("UPPPPPPPPPPP");
    }

    if (keypressed=="40")
    {
        down();
        console.log("DOWN");
    }

    if (keypressed=="37")
    {
        left();
        console.log("LEFTTTTTTTTTTTTTTTTTTTTTTTT");
    }

    if (keypressed=="39")
    {
        right();
        console.log("Righttttttttttttt");
    }

    if (keypressed=="66")
    {
        newimagegetsupdatedafterkeyispressed("wall.jpg");
        console.log("IMAGE HAS APPEARED");
    }

    if (keypressed=="67")
    {
        newimagegetsupdatedafterkeyispressed("ground.png");
        console.log("IMAGE HAS APPEARED");
    }

    if (keypressed=="68")
    {
        newimagegetsupdatedafterkeyispressed("dark_green.png");
        console.log("IMAGE HAS APPEARED");
    }

    if (keypressed=="86")
    {
        newimagegetsupdatedafterkeyispressed("light_green.png");
        console.log("IMAGE HAS APPEARED");
    }

    if (keypressed=="84")
    {
        newimagegetsupdatedafterkeyispressed("trunk.jpg");
        console.log("IMAGE HAS APPEARED");
    }

    if (keypressed=="78")
    {
        newimagegetsupdatedafterkeyispressed("roof.jpg");
        console.log("IMAGE HAS APPEARED");
    }

    if (keypressed=="69")
    {
        newimagegetsupdatedafterkeyispressed("yellow_wall.png");
        console.log("IMAGE HAS APPEARED");
    }

    if (keypressed=="76")
    {
        newimagegetsupdatedafterkeyispressed("unique.png");
        console.log("IMAGE HAS APPEARED");
    }

    if (keypressed=="65")
    {
        newimagegetsupdatedafterkeyispressed("cloud.jpg");
        console.log("IMAGE HAS APPEARED");
    }
};

function up(){
    if (yofplayer>=0){
        yofplayer=yofplayer-heightofblocksingeneral;
        console.log("PLAYER MOVES UP");
        console.log("X OF PLAYER = "+xofplayer);
        console.log("Y OF PLAYER = "+yofplayer);
        console.log("HEIGHT OF BLOCK = "+heightofblocksingeneral);
        canvas.remove(objectofplayersperson);
        playersupdatedlocation();
    };
};

function down(){
    if (yofplayer<=700){
        yofplayer=yofplayer+heightofblocksingeneral;
        console.log("PLAYER MOVES DOWN");
        console.log("X OF PLAYER = "+xofplayer);
        console.log("Y OF PLAYER = "+yofplayer);
        console.log("HEIGHT OF BLOCK = "+heightofblocksingeneral);
        canvas.remove(objectofplayersperson);
        playersupdatedlocation();
    };
};

function left(){
    if (xofplayer>=0){
        xofplayer=xofplayer-widthofblocksingeneral;
        console.log("PLAYER MOVES LEFT");
        console.log("X OF PLAYER = "+xofplayer);
        console.log("Y OF PLAYER = "+yofplayer);
        console.log("WIDTH OF BLOCK = "+widthofblocksingeneral);
        canvas.remove(objectofplayersperson);
        playersupdatedlocation();
    };
};

function right(){
    if (xofplayer<=1350){
        xofplayer=xofplayer+widthofblocksingeneral;
        console.log("PLAYER MOVES RIGHT");
        console.log("X OF PLAYER = "+xofplayer);
        console.log("Y OF PLAYER = "+yofplayer);
        console.log("WIDTH OF BLOCK = "+widthofblocksingeneral);
        canvas.remove(objectofplayersperson);
        playersupdatedlocation();
    };
};