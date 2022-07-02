
/*   ██▓███   ██▓ ▄▄▄       ██▀███   ██░ ██  ██▓ ▄▄▄██▀▀▀▄▄▄        #
#   ▓██░  ██▒▓██▒▒████▄    ▓██ ▒ ██▒▓██░ ██▒▓██▒   ▒██  ▒████▄      #
#   ▓██░ ██▓▒▒██▒▒██  ▀█▄  ▓██ ░▄█ ▒▒██▀▀██░▒██▒   ░██  ▒██  ▀█▄    #
#   ▒██▄█▓▒ ▒░██░░██▄▄▄▄██ ▒██▀▀█▄  ░▓█ ░██ ░██░▓██▄██▓ ░██▄▄▄▄██   #
#   ▒██▒ ░  ░░██░ ▓█   ▓██▒░██▓ ▒██▒░▓█▒░██▓░██░ ▓███▒   ▓█   ▓██▒  #
#   ▒▓▒░ ░  ░░▓   ▒▒   ▓▒█░░ ▒▓ ░▒▓░ ▒ ░░▒░▒░▓   ▒▓▒▒░   ▒▒   ▓▒█░  #
#   ░▒ ░      ▒ ░  ▒   ▒▒ ░  ░▒ ░ ▒░ ▒ ░▒░ ░ ▒ ░ ▒ ░▒░    ▒   ▒▒ ░  #
#   ░░        ▒ ░  ░   ▒     ░░   ░  ░  ░░ ░ ▒ ░ ░ ░ ░    ░   ▒     #
#             ░        ░  ░   ░      ░  ░  ░ ░   ░   ░        ░  ░ */                                                           

let mic, fft;
let slider;
let checkbox;

var barva1 = 250;

var val10 = 8;


function myCheckedEvent() {
  if (checkbox.checked()) {
    loop();
  } else {
    noLoop();
  }
}

function myCheckedEvent2() {
  if (checkbox2.checked()) {
    val10 = 8
  } else {
    val10 = -800;
   
  }
}


function setup() {
  var canvas = createCanvas(windowWidth -10  , windowHeight -12);
  
  noFill();
 

  canvas.parent('sketch-holder');
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);

 




  slider = createSlider(0, 10, 6,0.1);
 
  slider2 = createSlider(0, 10, 1,0.1);
 
  slider3 = createSlider(0, 100, 1,0.1);
 
  slider4 = createSlider(0, 100, 1,0.1);

//random scene  
  slider5 = createSlider(1, 500, 2,1);

  slider6 = createSlider(3, 10, 6,0.1);

  slider7 = createSlider(0, 24, 1 ,0.1);

  //idk
  slider8 = createSlider(0, 4, 0,0.1);
  slider9 = createSlider(0, 255, 340.1);
// how many dots
  slider10 = createSlider(20, 2000, 350, 1);
  slider11 = createSlider(0, 600, 400, 1);

  

  checkbox = createCheckbox('RUN', true);
  checkbox.changed(myCheckedEvent);
  checkbox.position(8, windowHeight -50);

  checkbox2 = createCheckbox('Sliders', true);
  checkbox2.changed(myCheckedEvent2);
  checkbox2.position(8, windowHeight -30);

  

}

  

function draw() {
  let vol = fft.analyze();
 
  slider.position(val10, 30);
  slider2.position(val10, 50);
  slider3.position(val10, 70);
  slider4.position(val10, 90);
  slider5.position(val10, 110);
  slider6.position(val10, 130);
  slider7.position(val10, 150);
  slider8.position(val10, 170);
  slider9.position(val10, 190);
  slider10.position(val10, 210);
  slider11.position(val10, 230);

  


  
  //slider.position(windowWidth / 20, windowHeight / 1.3);
  
  

 

  let val = slider.value();
  let val2 = slider2.value();
  let val3 = slider3.value();
  let val4 = slider4.value();

  let val5 = slider5.value();
  let val6 = slider6.value();
  let val7 = slider7.value();

  let val8 = slider8.value();
  let val9 = slider9.value();

  let valdots = slider10.value();
  let val11 = slider11.value();


  slider.addClass('govedo');
  slider2.addClass('govedo');
  slider3.addClass('govedo');
  slider4.addClass('govedo');
  slider5.addClass('govedo');
  slider6.addClass('govedo');
  slider7.addClass('govedo');
  slider8.addClass('govedo');
  slider9.addClass('govedo');
  slider10.addClass('govedo');
  slider11.addClass('govedo');



  background(34);
  stroke(barva1);

strokeWeight(0);
fill (255);

//  textSize(24);
// textFont('Georgia');
//  text(val, 0, 300);
//  text(val2, 30, 300);
//  text(val3, 60, 300);
//  text(val4, 120, 300);
//  text(val5, 170, 300);
//  text(val6, 200, 300);
//  text(val7, 240, 300);
//  text(val8, 310, 300);
//  text(val9, 400, 300);

translate (windowWidth /2 , windowHeight/2);




  beginShape();
  rotate (val8);
  for (i = 0; i < valdots; i++) {
    strokeWeight(2);
    point(0, map(vol[20], 0, 120, val11 , 1));
   point(0, map(vol[i], 0, 120, vol[i] /val2, val9) +val5);
   point(0, map(vol[i], 0, 25, height /10, val3)+val5);rotate ( val7);
   point(0, map(vol[i], 0, 120, height /10, val4)+val5);

    
    
    
   
    rotate (PI / val6);
    endShape();
    
    rotate (PI / val);
    //rotate (PI /2 );
   
  }
  

  
}

function windowResized() {
  resizeCanvas(windowWidth -10  , windowHeight -12);
}

