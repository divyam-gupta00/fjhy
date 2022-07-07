Backgroundo="black";
fonto="red";
texto="Text";

nosex=0;
nosey=0;
difference=0;
function sett(){
    Backgroundo=document.getElementById("Background_colour").value;
    fonto=document.getElementById("font_colour").value;
    texto=document.getElementById("texto").value;

//remove

document.getElementById("Background_colour").value="";
document.getElementById("font_colour").value="";
document.getElementById("texto").value="";
}
function setup(){
    canvas= createCanvas(550, 490)
    canvas.position(900,150)
    video= createCapture(VIDEO)
    video.size(550,500)
    video.position(100,150)

//posenet

    posenet= ml5.poseNet(video, modelLoaded)
    posenet.on("pose", gotResult)
}

function modelLoaded(){
    console.log("set")
}
function gotResult(r){
    if(r.length > 0){
console.log(r)
//nose
nosex= r[0].pose.nose.x
console.log(nosex)
nosey= r[0].pose.nose.y
console.log(nosey)
//wriste
lwxp= r[0].pose.leftWrist.x
rwxp= r[0].pose.rightWrist.x
difference= floor(lwxp-rwxp)
console.log(difference)
}
}
function draw(){
    background(Backgroundo)
    //squar
    fill(fonto);
    textSize(difference- 20);
text(texto, nosex, nosey);
    }