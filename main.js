function setup(){
    canvas = createCanvas(550,450)
    canvas.position(580,100)

    video = createCapture(VIDEO)
    video.size(550,500)

    poseNet = ml5.poseNet(video, modelLoaded)

    posenet.on("pose", gotPoses)
}
function draw(){
    background("dodgerblue")
}

function modelLoaded(){
    console.log("Model is initialized")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
    }
}