function preload() {
}

function setup() {
    windowWitdh = window.innerWidth;
    windowHeight = window.innerHeight;
    
  canvas = createCanvas(windowWitdh * .4 , windowHeight * .5);
  console.log(windowWitdh + " , " + windowHeight);
  canvas.position(windowWitdh * .30, windowHeight * .30);
  video = createCapture(VIDEO);
  video.hide();

  tint_color = "";
}

function draw() {
  image(video, 0, 0, windowWitdh * .4, windowHeight * .5);
}

function take_snapshot(){    
  save('student_name.png');
}


