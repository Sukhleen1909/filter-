noseX=0;
noseY=0;
function preload() {
    clown_nose=loadImage(' https://i.postimg.cc/PxFvYgkv/l1.png');
    }
    function setup() {
        canvas = createCanvas(300,300);
        canvas.position(550,130);
        video=createCapture(VIDEO);
        video.size(550,500);
        video.hide();
        poseNet=ml5.poseNet(video,modelLoaded);
        poseNet.on('pose',gotPoses);
    
    }

        function take_snapshot() {
            save('myfilterimage.png');
        }

        function modelLoaded() {
            console.log('Posenet is Initialized');
        }
        function gotPoses(results) {
            if (results.length > 0) {
                console.log(results);
                noseX=results[0].pose.nose.x-60;
                noseY=results[0].pose.nose.y-50;
                console.log("nose x= " +noseX);
                console.log("nose y= " +noseY);
            }
        }

        function draw() {
            image(video,0,0,300,300);
            image(clown_nose,noseX,noseY,50,20);
            
            }