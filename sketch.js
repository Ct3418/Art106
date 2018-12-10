var circle_x=0;
var circle1_x=0;
var circle2_x=0;
var circle3_x=0;
var circle4_x=0;
var circle5_x=0;
var circle6_x=0;
var circle7_x=0;
var circle8_x=0;

var circle_y=0;
var circle1_y=0;
var circle2_y=0;
var circle3_y=0;
var circle4_y=0;
var circle5_y=0;
var circle6_y=0;
var circle7_y=0;
var circle8_y=0;


function setup() {
var canvas= createCanvas(windowWidth, windowHeight);
 canvas.parent('header')
}

function draw() {
  background(123,207,253);

	//2nd circle
fill(30,200,78)
ellipse(circle2_x,10,50,50)

//1st circle
fill(150,50,26);
ellipse(circle1_x,20,16,16)

//3rd circle	
fill(134,244);
ellipse(circle3_x,70,16,16)
	
//4th circle
fill(66,229,244)
ellipse(circle4_x,90,50,50)

//5th circle	
fill(66,244)
ellipse(circle_x,120,50,50)
	
//6th circle
fill(255)
ellipse(circle5_x,150,60,60)
	
//7th circle
fill(0)
ellipse(circle6_x,200,100,100)
	
//8th circle
fill(254,165,253)
ellipse(circle7_x,300,60,60)
	
//9th circle going across
fill(0,0,255)
ellipse(circle8_x,350,89,89)

//y circle 1
fill(255,0,0)
ellipse(50,circle_y,50,50)
	
//2nd circle y
fill(55,66,99)
ellipse(100,circle1_y,60,60)

//3rd circle y
fill(0,255,0)
ellipse(200,circle2_y,100,100)
	
//4th circle y
fill(255,255,0)
ellipse(150,circle3_y,200,200)
	
//5th circle y
fill(67,89,98)
ellipse(300,circle4_y,50,50)
	
//6th circle y
fill(76,0,76)
ellipse(350,circle5_y,75,75)
	
circle_x=circle_x+1;
circle1_x=circle1_x+2;
circle2_x=circle2_x+.5;
circle3_x=circle3_x+5;
circle4_x=circle4_x+3;
circle5_x=circle5_x+2.5;
circle6_x=circle6_x+3.5;
circle7_x=circle7_x+4;
circle8_x=circle8_x+8;
	
circle_y=circle_y+3;
circle1_y=circle1_y+4
circle2_y=circle2_y+2
circle3_y=circle3_y+4
circle4_y=circle4_y+2.6
circle5_y=circle5_y+1
	

	
if(circle2_x>width+50){circle2_x=0-50}
if(circle_x>width+50){circle_x=0-50}
if(circle1_x>width+50){circle1_x=0-50}
if (circle3_x>width+50){circle3_x=0-50}
if(circle4_x>width+50){circle4_x=0-50}
if(circle4_x>width+50){circle4_x=0-50}
if(circle5_x>width+50){circle5_x=0-50}
if(circle6_x>width+50){circle6_x=0-50}
if(circle7_x>width+50){circle7_x=0-50}
if(circle8_x>width+50){circle8_x=0-50}
	
if(circle_y>height+50){circle_y=0-50}
if(circle1_y>height+50){circle1_y=0-50}
if(circle2_y>height+50){circle2_y=0-50}
if(circle3_y>height+500){circle3_y=0-500}
if(circle4_y>height+200){circle4_y=0-200}
if(circle5_y>height+300){circle5_y=0-300}
	

fill(255)
textAlign(CENTER, BASELINE);
text("Cameron Tucker",200,200,250,250)

	
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}