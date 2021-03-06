
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
var sliderval = 110;

//make button for RUN
function myCheckedEvent() {
  if (checkbox.checked()) {
    loop();
  } else {
    noLoop();
  }
}
//make button for SLIDERS
function myCheckedEvent2() {
  if (checkbox2.checked()) {
    val10 = 8;
    sliderval = 110;
  } else {
    val10 = -800;
    sliderval = 0;
   
  }
}

function setup() {
  var canvas = createCanvas(windowWidth -10  , windowHeight -12);
  canvas.parent('sketch-holder');
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  noFill();

  //create sliders (min, max, current, step)
  slider = createSlider(0, 10, random(10),0.1);
  slider2 = createSlider(0, 10, random(10),0.1);
  slider3 = createSlider(0, 100, random(100),0.1);
  slider4 = createSlider(0, 100, random(100),0.1); 
  slider5 = createSlider(1, 500, random(500),1);
  slider6 = createSlider(3, 10, random(10),0.1);
  slider7 = createSlider(0, 24, random(24) ,0.1);
  slider8 = createSlider(0, 4, random(4),0.1);
  slider9 = createSlider(0, 420, random(420),0.1); 
  slider10 = createSlider(20, 2000, 350, 1); //dots
  slider11 = createSlider(0, 600, random(400), 1);

  //create and position buttons
  checkbox = createCheckbox('RUN', true);
  checkbox.changed(myCheckedEvent);
  checkbox.position(8, windowHeight -50);

  checkbox2 = createCheckbox('Sliders', true);
  checkbox2.changed(myCheckedEvent2);
  checkbox2.position(8, windowHeight -30);

}

function draw() {
  let vol = fft.analyze();
  background(34);
  stroke(barva1);
  strokeWeight(0);
  fill (255);

  //assign values to sliders
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

  //add html class to sliders. Needed for styling with CSS
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

  //position sliders and text 
  textSize(14);
  textFont('roboto');
  slider.position(val10, 30);  text(val, sliderval, 16);
  slider2.position(val10, 50); text(val2, sliderval, 36);
  slider3.position(val10, 70); text(val3, sliderval, 56);
  slider4.position(val10, 90); text(val4, sliderval, 76);
  slider5.position(val10, 110); text(val5, sliderval, 96);
  slider6.position(val10, 130); text(val6, sliderval, 116);
  slider7.position(val10, 150); text(val7, sliderval, 136);
  slider8.position(val10, 170); text(val8, sliderval, 156);
  slider9.position(val10, 190); text(val9, sliderval, 176);
  slider10.position(val10, 210); text(valdots, sliderval, 196);
  slider11.position(val10, 230); text(val11, sliderval, 216);

 //move 0,0 to center of screen
 translate (windowWidth /2 , windowHeight/2);

 //AV part
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
  } 
}

// your mom 
function windowResized() {
  resizeCanvas(windowWidth -10  , windowHeight -12);
}

